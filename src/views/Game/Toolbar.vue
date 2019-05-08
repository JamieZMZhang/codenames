<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <span class="navbar-brand">
      <img
        src="icons/icon.svg"
        alt="website logo"
        class="app-logo align-top bg-light d-inline-block p-1 rounded"
      />
      Code Name
    </span>
    <div>
      <router-link
        to="/"
        class="btn btn-dark material-icons rounded-pill p-2"
        title="Create New Game"
      >
        add_to_photos
      </router-link>
      <!-- <div
        class="btn btn-dark material-icons rounded-pill p-2"
        title="Load Game"
        @click="onShare"
      >
        cloud_download
      </div> -->
      <div
        class="btn btn-dark material-icons rounded-pill p-2"
        title="Share Game"
        @click="onShare"
      >
        share
      </div>
    </div>
    <ShareModal
      v-if="showShareModal"
      @result="showShareModal=false"
    />
  </nav>
</template>

<script>
import ShareModal from "./ShareModal";

export default {
  name: "GameToolbar",
  components: {
    ShareModal
  },
  data() {
    return {
      showShareModal: false
    };
  },
  methods: {
    onShare() {
      if ("share" in navigator) {
        navigator.share({
          title: "Code Names",
          text: "Code Names",
          url: window.location.href
        });
      } else {
        this.showShareModal = true;
      }
    }
  }
};
</script>

<style scoped>
.app-logo {
  height: 30px;
  width: 30px;
}
</style>
