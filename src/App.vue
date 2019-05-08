<template>
  <div id="app">
    <router-view />
    <footer class="navbar fixed-bottom navbar-dark bg-dark justify-content-end py-1">
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
  </div>
</template>

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
