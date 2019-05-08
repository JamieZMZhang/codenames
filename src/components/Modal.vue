<template>
  <div class="modal fade show backdrop">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-light">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal"
};
</script>

