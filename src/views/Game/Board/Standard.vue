<template>
  <div class="d-flex flex-column justify-content-center align-items-center w-100">
    <SelectConfirmModal
      v-if="selectConfirm !== null"
      :word="tiles[selectConfirm][STANDARD_TILE.word]"
      @result="onConfirm"
    />
    <div class="card">
      <div class="card-header">
        <div class="btn blue">{{tileCount.blue}}</div>
        <div class="btn red">{{tileCount.red}}</div>
        <div class="btn nutral">{{tileCount.nutral}}</div>
      </div>
      <div
        :class="['card-body board p-3', displayType]"
        :style="boardStyle"
      >
        <div
          v-for="(tile, index) in tiles"
          :key="`tile-${index}`"
          :class="['btn',{selected: tile[STANDARD_TILE.selected]},STANDARD_COLORS[tile[STANDARD_TILE.color]]]"
          :data-glow="index===board.lastSelected"
          @click="onWordClick(index)"
        >{{tile[STANDARD_TILE.word]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { STANDARD_TILE, STANDARD_COLORS } from "@/Games/Standard";
import SelectConfirmModal from "../SelectConfirmModal";
import * as Hammer from "hammerjs";

export default {
  name: "StandardBoard",
  props: {
    board: Object
  },
  components: {
    SelectConfirmModal
  },
  data() {
    return {
      selectConfirm: null,
      mc: null,
      zoom: 1,
      oldZoom: 1
    };
  },
  computed: {
    displayType() {
      return this.$route.params.room === localStorage.clientId
        ? "master"
        : "spy";
    },
    tiles() {
      return this.board.tiles;
    },
    STANDARD_COLORS() {
      return STANDARD_COLORS;
    },
    STANDARD_TILE() {
      return STANDARD_TILE;
    },
    tileCount() {
      const count = {};
      ["red", "blue", "nutral"].forEach(c => {
        count[c] = this.tiles.filter(
          t =>
            t[STANDARD_TILE.color] === STANDARD_COLORS[c] &&
            !t[STANDARD_TILE.selected]
        ).length;
      });
      return count;
    },
    boardStyle() {
      return {
        gridTemplateColumns: `repeat(${this.board.width}, 1fr)`,
        zoom: this.zoom
      };
    },
    boardInfoStyle() {
      return {
        gridColumnStart: 0,
        gridColumnEnd: "end"
      };
    }
  },
  methods: {
    onWordClick(index) {
      if (!this.board.tiles[index][STANDARD_TILE.selected]) {
        this.selectConfirm = index;
      }
    },
    onConfirm(result) {
      if (result) {
        this.$emit(
          "tileClick",
          `tiles/${this.selectConfirm}/${STANDARD_TILE.selected}`,
          1
        );
        this.$emit("tileClick", "lastSelected", this.selectConfirm);
      }
      this.selectConfirm = null;
    }
  },
  mounted() {
    this.mc = new Hammer.Manager(this.$el);
    this.mc.add(new Hammer.Pinch());
    this.mc.on("pinchstart", () => {
      this.oldZoom = this.zoom;
    });
    this.mc.on("pinchmove", evt => {
      this.zoom = this.oldZoom * evt.scale;
    });
  },
  destroyed() {
    this.mc.destroy();
  }
};
</script>

<style lang="scss" scoped>
.red {
  --bg: var(--red);
  --color: white;
}

.blue {
  --bg: var(--blue);
  --color: white;
}
.mine {
  --bg: var(--dark);
  --color: white;
}
.nutral {
  --bg: var(--yellow);
  --color: black;
}

[data-glow] {
  box-shadow: 0 0 10px 5px #fff4;
}

.card {
  background: #ffffff40;
  border-radius: 15px;

  .card-header .btn {
    background-color: var(--bg);
    border-color: var(--bg);
    color: var(--color);
    font-weight: bold;
    cursor: default;

    & + .btn {
      margin-left: 12px;
    }
  }
}

.board {
  display: grid;
  column-gap: 0.5em;
  row-gap: 0.5em;
  grid-auto-rows: 1fr;
  max-width: var(--breakpoint-xl);

  .btn {
    font-weight: bold;
    text-transform: capitalize;
    display: inline-grid;
    align-content: center;

    &.selected {
      cursor: default;
    }
  }

  &.spy .btn {
    background-color: var(--light);
    border-color: transparent;
    color: black;

    &.selected {
      background-color: var(--bg);
      color: var(--color);
    }
  }

  &.master .btn {
    background-color: var(--bg);
    color: var(--color);

    &.selected {
      background-color: white;
      border-width: 1px;
      border-color: var(--bg);
      color: var(--bg);
    }
  }
}
</style>
