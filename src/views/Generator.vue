<template>
  <div class="modal fade show">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-light">
        <div class="modal-body">
          <div class="text-center">
            <span class="spinner-grow spinner-grow-sm"></span>
            Generating......
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Generator from "@/Generator";
const database = window.database;

export default {
  name: "view-generator",
  data() {
    return {};
  },
  mounted() {
    const { file, size: sizeStr } = this.$route.params;
    const xy = sizeStr.split("x").map(v => parseInt(v, 10));
    const size = { x: xy[0], y: xy[1] };
    const gen = new Generator(size, file);
    gen.generateAsync().then(game => {
      const clientId = localStorage.clientId;
      database.ref(`clients/${clientId}`).set(game);
      this.$router.replace(`/game/${clientId}`);
    });
  }
};
</script>

<style scoped>
</style>

