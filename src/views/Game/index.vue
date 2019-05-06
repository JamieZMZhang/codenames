<template>
  <LoadingModal v-if="!board" />
  <div
    v-else
    class="h-100"
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
      >
        Share Game
      </div>
    </nav>
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <div
        :class="['board p-3 rounded', roomType]"
        :style="boardStyle"
      >
        <div
          v-for="(c,index) in (board.size.x * board.size.y)"
          :key="`code-${index}`"
          :class="['btn',{selected: board.selected[index]} ,COLORS[board.colors[index]]]"
          @click="selectConfirm = index;"
        >{{board.words[index]}}</div>
      </div>
      <ShareModal
        v-if="showShareModal"
        @close="showShareModal=false"
      />
      <SelectConfirmModal
        v-if="selectConfirm !== null"
        :word="board.words[selectConfirm]"
        @result="onConfirm"
      />
    </div>
  </div>
</template>

<script>
import { COLORS } from "@/define";
import ShareModal from "./ShareModal";
import SelectConfirmModal from "./SelectConfirmModal";
import LoadingModal from "./LoadingModal";

const database = window.database;

let dbRef = null;

export default {
  name: "view-game",
  components: {
    ShareModal,
    SelectConfirmModal,
    LoadingModal
  },
  data() {
    return {
      selectConfirm: null,
      board: null,
      showShareModal: false
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
    share() {
      if ("share" in navigator) {
        navigator.share({
          title: "Code Names",
          text: "Code Names",
          url: window.location.href
        });
      } else {
        this.showShareModal = true;
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

.board {
  display: grid;
  column-gap: 0.8em;
  row-gap: 0.8em;
  background: #ffffff40;
  max-width: var(--breakpoint-xl);

  .btn {
    font-weight: bold;
    text-transform: capitalize;
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


