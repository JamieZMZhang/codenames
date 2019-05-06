<template>
  <div
    v-if="!board"
    class="modal fade show"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="spinner-border spinner-border-sm">
            <span class="sr-only">Loading...</span>
          </div>
          Loading......
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
      :class="['board p-3 rounded', roomType]"
      :style="boardStyle"
    >
      <div
        v-for="(c,index) in (board.size.x * board.size.y)"
        :key="`code-${index}`"
        :class="['btn',{selected: board.selected[index]} ,COLORS[board.colors[index]]]"
        @click="onSelect(index)"
      >{{board.words[index]}}</div>
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
            Choosing <span class="font-weight-bold">{{board.words[selectConfirm]}}</span>?
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
const database = window.database;

let dbRef = null;

export default {
  name: "view-game",
  data() {
    return {
      selectConfirm: null,
      board: null
    };
  },
  computed: {
    roomType() {
      return this.$route.params.room === localStorage.clientId
        ? "master"
        : "spy";
    },
    room() {
      return this.$route.params.room;
    },
    COLORS() {
      return COLORS;
    },
    boardStyle() {
      if (!this.board) {
        return {};
      }
      return {
        gridTemplateColumns: Array(this.board.size.x)
          .fill("1fr")
          .join(" ")
      };
    }
  },
  watch: {
    room(value) {
      this.subscribeDb(value);
    }
  },
  methods: {
    onSelect(index) {
      if (!this.owner) {
        this.selectConfirm = index;
      }
    },
    share() {
      if ("share" in navigator) {
        navigator.share({
          title: "Code Names",
          text: "Code Names",
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
        const arr = [...this.board.selected];
        arr[this.selectConfirm] = true;
        this.board = {
          ...this.board,
          selected: arr
        };
        database.ref(`clients/${this.$route.params.room}`).set(this.board);
      }
      this.selectConfirm = null;
    },
    subscribeDb(room) {
      if (dbRef) {
        dbRef.off("value");
      }
      if (room) {
        dbRef = database.ref(`clients/${room}`);
        dbRef.on("value", snapshot => {
          this.board = snapshot.val();
        });
      }
    }
  },
  mounted() {
    this.subscribeDb(this.room);
  },
  destroyed() {
    this.subscribeDb(null);
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


