<template>
  <Modal>
    <div class="modal-header justify-content-center">
      <h5 class="modal-title">Share Your Game</h5>
    </div>
    <div class="modal-body">
      <div class="input-group">
        <input
          id="url"
          class="form-control"
          :value="url"
          readonly
        >
        <div class="input-group-append">
          <div
            class="btn btn-outline-secondary"
            @click="onCopy"
          >Copy</div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <div
        v-if="hintCopied"
        class="text-success"
      >link has been copied!</div>
      <div
        class="btn btn-secondary"
        @click="$emit('result')"
      >OK</div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "ShareModal",
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
    url() {
      return location.href;
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
    }
  }
};
</script>

