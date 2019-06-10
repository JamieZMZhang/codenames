<template>
  <Modal>
    <div class="modal-header justify-content-center">
      <h5 class="modal-title">Sign In to Code Names</h5>
    </div>
    <div class="modal-body text-center d-flex flex-column">
      <div
        v-if="errorMessage"
        class="text-danger"
      >Sign In Error: {{errorMessage}}</div>
      <div
        class="btn btn-light"
        @click="signInGoogle"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          style="height: 1em;"
          class="mr-1"
        />
        Sign In With Google</div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import { userStore } from "@/stores/userStore";

const auth = window.firebase.auth;

export default {
  name: "Login",
  components: {
    Modal
  },
  data() {
    return {
      errorMessage: null
    };
  },
  methods: {
    signInGoogle() {
      const provider = new auth.GoogleAuthProvider();
      auth().signInWithRedirect(provider);
    }
  },
  mounted() {
    if (localStorage.user) {
      userStore.user = JSON.parse(localStorage.user);
    } else {
      auth()
        .getRedirectResult()
        .then(result => {
          if (result.credential) {
            const { email, displayName } = result.user;
            userStore.user = { email, displayName };
            localStorage.user = JSON.stringify(userStore.user);
          }
        })
        .catch(error => (this.errorMessage = error.message));
    }
  }
};
</script>

