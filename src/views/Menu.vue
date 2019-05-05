<template>
  <div class="modal fade show">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-light">
        <div class="modal-header justify-content-center">
          <h2 class="modal-title">Code Names</h2>
        </div>
        <div class="modal-body">
          <div
            v-if="!menu"
            class="text-center"
          >
            <div class="spinner-border">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <div
            v-else-if="menu.length === 0"
            class="text-center"
          >
            Error loading dictionary files. Please try again later.
          </div>
          <div
            v-else
            v-for="dict in menu"
            :key="dict.file"
            class="btn btn-primary btn-lg btn-block"
            @click="generate(dict.file);"
          >{{dict.label}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

let menuStore = null;

export default {
  name: "view-menu",
  data() {
    return {
      menu: menuStore
    };
  },
  watch: {
    menu(value) {
      if (value) {
        menuStore = value;
      }
    }
  },
  methods: {
    generate(file) {
      this.$router.push(`/generator/5x5/${file}`);
    }
  },
  mounted() {
    if (!this.menu) {
      Axios.get("/dicts/list.json")
        .then(response => (this.menu = response.data))
        .catch(() => (this.menu = []));
    }
  }
};
</script>

<style scoped>
</style>

