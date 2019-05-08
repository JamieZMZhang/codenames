<template>
  <Modal>
    <div class="modal-header justify-content-center">
      <h5 class="modal-title">Load Game</h5>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Game Link</label>
        <input
          id="url"
          :class="['form-control', {'is-invalid': invalidUrl}]"
          v-model="url"
          placeholder="Paste the url here..."
        >
        <div class="invalid-feedback">This is an invalid link</div>
      </div>
    </div>
    <div class="modal-footer">
      <div
        class="btn btn-secondary"
        @click="onLoad"
      >Load</div>
      <div
        class="btn btn-light"
        @click="$emit('result',false)"
      >Cancel</div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "LoadGameModal",
  components: {
    Modal
  },
  data() {
    return {
      url: "",
      invalidUrl: false
    };
  },
  methods: {
    onLoad() {
      const regexp = /https?:\/\/(?:localhost:\d*|jamiezmzhang\.github\.io)\/codenames\/?#\/game\/([\w\d=]+)/;
      const match = regexp.exec(this.url);
      if (match) {
        this.$router.replace(`/game/${match[1]}`);
        this.$emit("result", true);
      } else {
        this.invalidUrl = true;
      }
    }
  }
};
</script>

