<template>
  <div
    class="dropdown"
    @click="toggleItems"
    v-outsideClick="onOutsideClick"
  >
    <div class="btn btn-dark dropdown-toggle">
      <slot></slot>
    </div>
    <div :class="['dropdown-menu w-100',{ show, 'dropdown-menu-right': alignRight}]">
      <slot name="items"></slot>
    </div>
  </div>
</template>

<script>
import outsideClick from "@/directives/OutsideClick";

export default {
  name: "Dropdown",
  directives: {
    outsideClick
  },
  props: {
    alignRight: Boolean
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleItems() {
      this.show = !this.show;
    },
    onOutsideClick() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
</style>
