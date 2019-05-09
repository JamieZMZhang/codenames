<template>
  <Modal>
    <div
      class="modal-body"
      v-if="!error"
    >
      <div class="text-center">
        <span class="spinner-grow spinner-grow-sm"></span>
        Generating......
      </div>
    </div>
    <template v-else>
      <div class="modal-body">Error generating a new game. Please choose another dictionary or try again later.</div>
      <div class="modal-footer">
        <router-link to="/" class="btn btn-secondary">OK</router-link>
      </div>
    </template>
  </Modal>
</template>

<script>
import Generator from "@/Generator";
import Modal from "@/components/Modal";

const database = window.database;

export default {
  name: "view-generator",
  components: {
    Modal
  },
  data() {
    return {
      error: false
    };
  },
  mounted() {
    const { file, size: sizeStr } = this.$route.params;
    const xy = sizeStr.split("x").map(v => parseInt(v, 10));
    const size = { x: xy[0], y: xy[1] };
    const gen = new Generator(size, file);
    gen
      .generateAsync()
      .then(game => {
        const clientId = localStorage.clientId;
        database.ref(`clients/${clientId}`).set(game);
        this.$router.replace(`/game/${clientId}`);
      })
      .catch(() => (this.error = true));
  }
};
</script>

<style scoped>
</style>

