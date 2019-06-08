<template>
  <div class="d-flex flex-column justify-content-center align-items-center w-100">
    <SelectConfirmModal
      v-if="selectConfirm !== null"
      :word="tiles[selectConfirm].word"
      @result="onConfirm"
    />
    <div class="card">
      <div class="card-header d-flex">
        <div
          class="btn"
          style="background: var(--green); color: white; cursor: default;"
        >{{tileCount.green}}</div>
        <div
          class="align-items-center d-inline-flex flex-grow-1 font-weight-bold justify-content-center text-center text-white"
          style="font-size:25px"
        >Team {{playerTeam}}</div>
        <button
          class="btn btn-primary"
          @click.prevent="onSwitch"
        >Switch Side</button>
      </div>
      <div
        class="card-body board p-3"
        :data-master="!isGuessingTeam"
        :style="boardStyle"
      >
        <div
          v-for="(tile, index) in tiles"
          :key="`tile-${index}`"
          class="btn px-1"
          :data-color="tile[`color${guessingTeam}`]"
          :data-selected="tile[`selected${guessingTeam}`]"
          :data-selectedGreen="(tile.colorA === 'green' && !!tile.selectedA) || (tile.colorB === 'green' && !!tile.selectedB)"
          :data-glow="board.lastSelected===index"
          @click="onWordClick(index)"
        >{{tile.word}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectConfirmModal from "../SelectConfirmModal";
import * as Hammer from "hammerjs";

export default {
  name: "DualBoard",
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
    playerTeam() {
      return this.$route.params.room === localStorage.clientId ? "A" : "B";
    },
    tiles() {
      return this.board.tiles;
    },
    tileCount() {
      return {
        green: this.tiles.filter(
          t =>
            ((t.colorA === "green" && !t.selectedA) ||
              (t.colorB === "green" && !t.selectedB)) &&
            t.colorA !== t.colorB
        ).length
      };
    },
    guessingTeam() {
      return this.board.guessingTeam;
    },
    isGuessingTeam() {
      return this.guessingTeam === this.playerTeam;
    },
    boardStyle() {
      return {
        gridTemplateColumns: `repeat(${this.board.width}, 1fr)`,
        fontSize: `${this.zoom}rem`,
        zoom: this.zoom
      };
    }
  },
  methods: {
    onWordClick(index) {
      if (
        this.isGuessingTeam &&
        !this.board.tiles[index][`selected${this.guessingTeam}`]
      ) {
        this.selectConfirm = index;
      }
    },
    onConfirm(result) {
      if (result) {
        this.$emit(
          "tileClick",
          `tiles/${this.selectConfirm}/selected${this.guessingTeam}`,
          1
        );
        this.$emit("tileClick", `lastSelected`, this.selectConfirm);
      }
      this.selectConfirm = null;
    },
    onSwitch() {
      this.$emit(
        "tileClick",
        "guessingTeam",
        this.guessingTeam === "A" ? "B" : "A"
      );
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
.card {
  background: #ffffff40;
  border-radius: 15px;

  .card-header .btn {
    font-weight: bold;

    & + .btn {
      margin-left: 12px;
    }
  }
}

.board {
  display: grid;
  grid-auto-rows: 1fr;
  max-width: var(--breakpoint-xl);

  .btn {
    font-weight: bold;
    text-transform: capitalize;
    display: inline-grid;
    align-content: center;
    margin: 5px;
    font-size: inherit;
    &[data-selected="1"] {
      cursor: default;
    }
  }
  .btn {
    background-color: var(--light);
    border-color: transparent;
    color: black;

    &[data-selected="1"] {
      background-color: var(--bg);
      color: var(--color);
    }
    &[data-selectedgreen] {
      color: white;
      background: var(--green);
    }
  }

  &[data-master] .btn {
    background-color: var(--bg);
    color: var(--color);
    cursor: default;

    &[data-selected="1"] {
      background-color: white;
      border-width: 1px;
      border-color: var(--bg);
      color: var(--bg);
    }

    &[data-selectedgreen] {
      background: white;
      color: var(--green);
    }
  }
}

[data-glow] {
  box-shadow: 0 0 10px 5px #fff4;
}

[data-color="green"] {
  --bg: var(--green);
  --color: white;
}
[data-color="mine"] {
  --bg: var(--dark);
  --color: white;
}
[data-color="nutral"] {
  --bg: var(--yellow);
  --color: black;
}
</style>
