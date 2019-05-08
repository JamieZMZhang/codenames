<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100">
    <SelectConfirmModal
      v-if="selectConfirm !== null"
      :word="tiles[selectConfirm][TILE.word]"
      @result="onConfirm"
    />
    <div
      :class="['board p-3 rounded', displayType]"
      :style="boardStyle"
    >
      <div
        v-for="(tile, index) in tiles"
        :key="`tile-${index}`"
        :class="['btn',{selected: tile[TILE.selected]} ,COLORS[tile[TILE.color]]]"
        @click="onWordClick(index)"
      >{{tile[TILE.word]}}</div>
    </div>
  </div>
</template>

<script>
import { TILE, COLORS } from "@/define";
import SelectConfirmModal from "./../SelectConfirmModal";
import * as Hammer from "hammerjs";

export default {
  name: "BasicBoard",
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
    COLORS() {
      return COLORS;
    },
    TILE() {
      return TILE;
    },
    boardStyle() {
      return {
        gridTemplateColumns: `repeat(${this.board.width}, 1fr)`,
        zoom: this.zoom
      };
    }
  },
  methods: {
    onWordClick(index) {
      if (!this.board.tiles[index][TILE.selected]) {
        this.selectConfirm = index;
      }
    },
    onConfirm(result) {
      if (result) {
        this.$emit("tileClick", this.selectConfirm);
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

.board {
  display: grid;
  column-gap: 0.8em;
  row-gap: 0.8em;
  grid-auto-rows: 1fr;
  background: #ffffff40;
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
