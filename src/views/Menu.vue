<template>
  <form @submit.prevent="generate">
    <Modal>
      <div class="modal-header justify-content-center">
        <h2 class="modal-title">Code Names</h2>
      </div>
      <template v-if="dicts && !dicts.length">
        <div class="modal-body">
          <div class="text-center">
            Error loading dictionary files. Please try again later.
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-dark"
            @click="onReload"
          >Reload</button>
        </div>
      </template>
      <template v-else>
        <div class="modal-body">
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
                  <span class="input-group-text">Type</span>
                </div>
                <select
                  required
                  v-model="form.type"
                  class="form-control"
                >
                  <option value="standard">Stanard</option>
                  <option value="dual">Dual</option>
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
        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-dark"
          >Create Game</button>
        </div>
      </template>
    </Modal>
  </form>
</template>

<script>
import Axios from "axios";
import Modal from "@/components/Modal";

let dictsStore = null;

export default {
  name: "view-menu",
  components: {
    Modal
  },
  data() {
    return {
      dicts: dictsStore,
      form: {
        width: 5,
        height: 5,
        dict: "",
        type: "standard"
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
      const { type, width, height, dict } = this.form;
      this.$router.replace(`/generator/${type}/${width}x${height}/${dict}`);
    },
    onReload() {
      window.location.reload();
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
