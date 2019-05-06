<template>
  <div
    v-if="!mode"
    class="modal fade show"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-light">
        <div class="modal-header justify-content-center">
          <h5 class="modal-title">Select Display Mode</h5>
        </div>
        <div class="modal-body container">
          <div class="row">
            <div class="col">
              <div
                class="btn btn-block btn-dark"
                @click="mode='master'"
              >Master</div>
            </div>
            <div class="col">
              <div
                class="btn btn-block btn-info"
                @click="mode='spy'"
              >Spy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="d-flex flex-column justify-content-center align-items-center fullscreen"
  >
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <router-link
        to="/"
        class="navbar-brand"
      >
        CodeName
      </router-link>
      <div
        class="btn btn-dark"
        @click="share"
      >Share Game</div>
    </nav>
    <div
      :class="['board p-3 rounded', mode]"
      :style="boardStyle"
    >
      <template v-for="y in height">
        <div
          v-for="x in width"
          :key="`col-${x}-${y}`"
          :class="['btn',{selected: selected[x - 1 + height * (y - 1)] === '1'} ,COLORS[board.colors[x - 1 + height * (y - 1)]]]"
          @click="onSelect(x,y)"
        >{{words[x - 1 + height * (y - 1)]}}</div>
      </template>
    </div>
    <div
      v-if="selectConfirm"
      class="modal fade show backdrop"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-light">
          <div class="modal-header justify-content-center">
            <h5 class="modal-title">Confirm</h5>
          </div>
          <div class="modal-body">
            Choosing <span class="font-weight-bold">{{selectConfirm.word}}</span>
          </div>
          <div class="modal-footer">
            <div
              class="btn btn-secondary"
              @click="onConfirm(true)"
            >YES</div>
            <div
              class="btn btn-light"
              @click="onConfirm(false)"
            >NO</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { COLORS } from "@/define";

export default {
  name: "view-game",
  data() {
    return {
      mode: null,
      selectConfirm: null
    };
  },
  computed: {
    COLORS() {
      return COLORS;
    },
    board: {
      get() {
        return JSON.parse(atob(this.$route.params.game));
      },
      set(value) {
        this.$router.replace(btoa(JSON.stringify(value)));
      }
    },
    words() {
      return this.board.words.split(",");
    },
    width() {
      return this.board.size.x;
    },
    height() {
      return this.board.size.y;
    },
    selected: {
      get() {
        return this.board.selected;
      },
      set(value) {
        this.board = {
          ...this.board,
          selected: value
        };
      }
    },
    boardStyle() {
      return {
        gridTemplateColumns: Array(this.width)
          .fill("1fr")
          .join(" ")
      };
    }
  },
  methods: {
    onSelect(x, y) {
      const arr = this.selected.split("");
      const target = x - 1 + this.height * (y - 1);

      if (this.mode === "master") {
        arr[target] = arr[target] === "0" ? "1" : "0";
        this.selected = arr.join("");
      } else {
        this.selectConfirm = {
          word: this.words[target],
          onClick: () => {
            arr[target] = "1";
            this.selected = arr.join("");
          }
        };
      }
    },
    share() {
      if ("share" in navigator) {
        navigator.share({
          title: "Code Names",
          text: "Code Names Game",
          url: window.location.href
        });
      } else {
        alert(
          "share feature not supported. Please copy and send the current url manually."
        );
      }
    },
    onConfirm(result) {
      if (result) {
        this.selectConfirm.onClick();
      }
      this.selectConfirm = null;
    }
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

.fullscreen {
  width: 100vw;
  height: 100vh;
}

.board {
  display: grid;
  column-gap: 0.8em;
  row-gap: 0.8em;
  background: #ffffff40;
  max-width: var(--breakpoint-xl);

  .btn {
    font-weight: bold;
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

  .row + .row {
    margin-top: 10px;
  }
}

.backdrop {
  background: #00000088;
}
</style>


