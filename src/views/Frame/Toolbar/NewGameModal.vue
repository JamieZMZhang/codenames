<template>
  <Modal>
    <div class="modal-header justify-content-center">
      <h5 class="modal-title">Create New Game</h5>
    </div>
    <div class="modal-body">
      Are you sure you want to {{ isOwner ?'delete' : 'leave'}} this game</div>
    <div class="modal-footer">
      <div
        class="btn btn-secondary"
        @click="onConfirm"
      >YES</div>
      <div
        class="btn btn-light"
        @click="$emit('result', false)"
      >NO</div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "NewGameModal",
  components: {
    Modal
  },
  data() {
    return {
      hintCopied: false,
      hintTimer: null
    };
  },
  computed: {
    isOwner() {
      return this.$route.params.room === localStorage.clientId;
    }
  },
  methods: {
    onCopy() {
      document.getElementById("url").select();
      document.execCommand("copy");
      this.hintCopied = true;
      if (this.hintTimer) {
        clearTimeout(this.hintTimer);
      }
      this.hintTimer = setTimeout(() => (this.hintCopied = false), 2000);
    },
    onConfirm() {
      const { room } = this.$route.params;
      if (this.isOwner) {
        window.database.ref(`clients/${room}`).set(null);
      }
      this.$router.replace("/");
      this.$emit("result", true);
    }
  }
};
</script>

