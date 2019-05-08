<template>
  <nav class="navbar navbar-dark bg-dark">
    <span class="navbar-brand">
      <img
        src="icons/icon.svg"
        alt="website logo"
        class="app-logo align-top bg-light d-inline-block p-1 rounded"
      /> Code Names</span>
    <div>
      <div
        :hidden="!$route.path.startsWith('/game/')"
        to="/"
        class="btn btn-dark rounded-pill p-2 material-icons"
        title="Create New Game"
        @click="showNewGameModal=true"
      >add_to_photos</div>
      <div
        class="btn btn-dark material-icons rounded-pill p-2"
        title="Load Game"
        @click="showLoadGameModal=true"
      >cloud_download</div>
      <div
        :hidden="!$route.path.startsWith('/game/')"
        class="btn btn-dark rounded-pill p-2 material-icons"
        title="Share Game"
        @click="onShare"
      >share</div>
    </div>
    <NewGameModal
      v-if="showNewGameModal"
      @result="showNewGameModal=false"
    />
    <LoadGameModal
      v-if="showLoadGameModal"
      @result="showLoadGameModal=false"
    />
    <ShareModal
      v-if="showShareModal"
      @result="showShareModal=false"
    />
  </nav>
</template>

<script>
import ShareModal from "./ShareModal";
import LoadGameModal from "./LoadGameModal";
import NewGameModal from "./NewGameModal";

export default {
  name: "GameToolbar",
  components: {
    NewGameModal,
    LoadGameModal,
    ShareModal
  },
  data() {
    return {
      showShareModal: false,
      showLoadGameModal: false,
      showNewGameModal: false
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
nav.navbar{
  z-index: 9999;
}
.app-logo {
  height: 30px;
  width: 30px;
}
</style>
