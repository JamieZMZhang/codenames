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
  <component
    v-else
    :is="board.type"
    :board="board"
    @tileClick="onTileClick"
  />
</template>

<script>
import LoadingModal from "./LoadingModal";
import StandardBoard from "./Board/Standard";
import DualBoard from "./Board/Dual";
import Modal from "@/components/Modal";
import { userStore } from "@/stores/userStore";
const database = window.database;

let dbRef = null;

export default {
  name: "view-game",
  components: {
    LoadingModal,
    Modal,
    standard: StandardBoard,
    dual: DualBoard
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
        dbRef = database.ref(`clients/${room.replace(/\./g, "_")}`);
        dbRef.on("value", snapshot => {
          const game = snapshot.val();
          this.board = game || -1;
        });
      }
    },
    onTileClick(path, value) {
      dbRef.child(path).set(value);
    },
    checkRotate() {
      document.getElementById("app").dataset.rotate =
        window.innerHeight > window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener("orientationchange", () => {
      setTimeout(this.checkRotate, 100);
    });
    window.addEventListener("resize", () => {
      setTimeout(this.checkRotate, 100);
    });
    this.checkRotate();
    if (this.room) {
      this.subscribeDb(this.room);
    } else {
      if (
        database
          .ref(`clients/${this.room.replace(/\./g, "_")}`)
          .once("value", data => {
            if (data) {
              this.$router.push(`/game/${userStore.user.email}`);
            } else {
              this.$router.push("/");
            }
          })
      );
    }
  },
  destroyed() {
    this.subscribeDb(null);
    document.getElementById("app").dataset.rotate = false;
  }
};
</script>
