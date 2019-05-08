<template>
  <LoadingModal v-if="!board" />
  <Modal v-else-if="board === -1">
    <div class="modal-body">
      This link doesn't have any games going on. Please create a new game and share the new link with your friends or wait for this room's owner to create one.
    </div>
    <div class="modal-footer">
      <div
        class="btn btn-secondary"
        @click="$router.replace('/')"
      >OK</div>
    </div>
  </Modal>
  <div
    v-else
    class="flex-grow-1 p-3"
  >
    <BasicBoard
      v-if="board.type==='basic'"
      :board="board"
      @tileClick="onTileClick"
    />
  </div>
</template>

<script>
import LoadingModal from "./LoadingModal";
import BasicBoard from "./Board/Basic";
import Modal from "@/components/Modal";
import { TILE } from "@/define";

const database = window.database;

let dbRef = null;

export default {
  name: "view-game",
  components: {
    LoadingModal,
    BasicBoard,
    Modal
  },
  data() {
    return {
      board: null
    };
  },
  computed: {
    room() {
      return this.$route.params.room;
    }
  },
  watch: {
    room(value) {
      this.subscribeDb(value);
    }
  },
  methods: {
    subscribeDb(room) {
      if (dbRef) {
        dbRef.off("value");
      }
      if (room) {
        dbRef = database.ref(`clients/${room}`);
        dbRef.on("value", snapshot => {
          const game = snapshot.val();
          this.board = game || -1;
        });
      }
    },
    onTileClick(index) {
      dbRef.child(`tiles/${index}/${TILE.selected}`).set(1);
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
