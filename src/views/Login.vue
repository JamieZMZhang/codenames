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
      const gOauth = new window.firebase.auth.GoogleAuthProvider();
      window.firebase
        .auth()
        .signInWithPopup(gOauth)
        .then(result => {
          alert(JSON.stringify(result));
          // eslint-disable-next-line no-console
          console.log("loggedIn", result);
        })
        .catch(error => (this.errorMessage = error.message));
    }
  }
};
</script>

