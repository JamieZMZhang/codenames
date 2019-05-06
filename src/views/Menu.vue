<template>
  <form @submit.prevent="generate">
    <div class="modal fade show">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-light">
          <div class="modal-header justify-content-center">
            <h2 class="modal-title">Code Names</h2>
          </div>
          <div class="modal-body">
            <div
              v-if="dicts && dicts.length === 0"
              class="text-center"
            >
              Error loading dictionary files. Please try again later.
            </div>
            <div v-else>
              <div class="row">
                <div class="col-12">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Width</span>
                    </div>
                    <select
                      required
                      v-model="form.width"
                      class="form-control"
                    >
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                    <div class="input-group-prepend input-group-append">
                      <span class="input-group-text">Height</span>
                    </div>
                    <select
                      required
                      v-model="form.height"
                      class="form-control"
                    >
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Dict</span>
                    </div>
                    <select
                      required
                      v-model="form.dict"
                      class="form-control"
                    >
                      <option
                        v-for="dict in dicts"
                        :key="dict.file"
                        :value="dict.file"
                      >{{dict.label}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-dark"
            >Create Game</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Axios from "axios";

let dictsStore = null;

export default {
  name: "view-menu",
  data() {
    return {
      dicts: dictsStore,
      form: {
        width: 5,
        height: 5,
        dict: ""
      }
    };
  },
  watch: {
    dicts(value) {
      if (value) {
        dictsStore = value;
      }
    }
  },
  methods: {
    generate() {
      const { width, height, dict } = this.form;
      this.$router.push(`/generator/${width}x${height}/${dict}`);
    }
  },
  mounted() {
    if (!this.menu) {
      Axios.get(`${document.baseURI}dicts/list.json`)
        .then(response => (this.dicts = response.data))
        .catch(() => (this.dicts = []));
    }
  }
};
</script>

<style scoped>
.row + .row {
  margin-top: 0.8em;
}
</style>
