<template>
  <footer
    class="navbar navbar-dark bg-dark justify-content-end py-1"
    :hidden="hide"
    @click="onClick"
  >
    <span class="navbar-text py-0">
      Icons made by <a
        href="https://www.freepik.com/"
        title="Freepik"
      >Freepik</a> from <a
        href="https://www.flaticon.com/"
        title="Flaticon"
      >www.flaticon.com</a> is licensed by <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
      >CC 3.0 BY</a>
    </span>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      hide: false,
      clickTime: 0
    };
  },
  methods: {
    onClick() {
      const now = +new Date();
      if (now - this.clickTime < 500) {
        this.hide = true;
      } else {
        this.clickTime = now;
      }
    }
  }
};
</script>

