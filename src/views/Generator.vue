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
        <router-link
          to="/"
          class="btn btn-secondary"
        >OK</router-link>
      </div>
    </template>
  </Modal>
</template>

<script>
import GenerateStandardAsync from "@/Games/Standard";
import GenerateDualAsync from "@/Games/Dual";
import { userStore } from "@/stores/userStore";
import Modal from "@/components/Modal";

const database = window.database;

const generators = {
  standard: GenerateStandardAsync,
  dual: GenerateDualAsync
};

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
    const { type, file, size } = this.$route.params;
    const xy = size.split("x").map(v => parseInt(v, 10));

    generators[type](xy[0], xy[1], file)
      .then(game => {
        const { email } = userStore.user;
        database
          .ref(`clients/${email.replace(/\./g, "_")}`)
          .set(game);
        this.$router.replace(`/game/${email}`);
      })
      .catch(ex => {
        this.error = true;
        // eslint-disable-next-line no-console
        console.error(ex);
      });
  }
};
</script>

<style scoped>
</style>

