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
import { userStore } from "@/stores/userStore";

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
      return this.$route.params.room === userStore.user.email;
    }
  },
  methods: {
    onConfirm() {
      if (this.isOwner) {
        window.database
          .ref(`clients/${userStore.user.email.replace(/\./g, "_")}`)
          .set(null);
      }
      this.$router.replace("/");
      this.$emit("result", true);
    }
  }
};
</script>

