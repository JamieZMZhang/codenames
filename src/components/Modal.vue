<template>
  <div :class="['modal fade', {show}]">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Modal",
  props: {
    show: Boolean
  },
  watch: {
    show(value) {
      setModalOpen(value);
    }
  }
};
</script>

