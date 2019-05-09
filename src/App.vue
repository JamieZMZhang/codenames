<template>
  <div
    id="app"
    class="d-flex flex-column"
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

export default {
  components: {
    Toolbar,
    Footer
  }
};
</script>


<style>
#app {
  height: 100vh;
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
