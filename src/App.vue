<template>
  <div
    id="app"
    class="d-flex flex-column"
    :data-rotate="rotate"
  >
    <Toolbar />
    <main class="flex-grow-1 d-flex">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Toolbar from "@/views/Frame/Toolbar";
import Footer from "@/views/Frame/Footer";
import { setTimeout } from "timers";

export default {
  components: {
    Toolbar,
    Footer
  },
  data() {
    return {
      rotate: false
    };
  },
  mounted() {
    window.addEventListener("orientationchange", () => {
      setTimeout(
        () => (this.rotate = window.innerHeight > window.innerWidth),
        100
      );
    });
  }
};
</script>


<style>
#app {
  width: 100vw;
  height: 100vh;
}
#app[data-rotate] {
  transform: rotate(90deg) translate(0px, -100%);
  transform-origin: top left;
  height: 100vw;
  width: 100vh;
}
body {
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+");
}
footer.navbar {
  font-size: 0.6em;
}
/* bootstrap fixes */
.btn {
  cursor: pointer;
}
.modal.show {
  display: block;
}
.modal.backdrop {
  background: #00000088;
}
</style>
