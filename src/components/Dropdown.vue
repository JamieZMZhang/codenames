<template>
  <div
    class="dropdown"
    @click="toggleItems"
    v-outsideClick="onOutsideClick"
  >
    <div class="btn btn-secondary dropdown-toggle w-100">
      <template v-if="options">
        {{selectedItem && selectedItem.label || placeholder}}
      </template>
      <div
        v-else
        class="spinner-border text-light"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div
      v-if="options"
      :class="['dropdown-menu w-100',{show: open}]"
    >
      <span
        v-for="opt in options"
        :key="opt.value"
        class="dropdown-item"
        @click="$emit('input',opt.value)"
      >{{opt.label}}</span>
    </div>
  </div>
</template>

<script>
import outsideClick from "@/directives/OutsideClick";

export default {
  name: "Dropdown",
  props: {
    value: {
      type: [String, Number]
    },
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  directives: {
    outsideClick
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    isLoading() {
      return !!this.options;
    },
    selectedItem() {
      if (!this.options) {
        return null;
      }
      return this.options.find(i => i.value === this.value);
    }
  },
  methods: {
    toggleItems() {
      this.open = !this.open;
    },
    onOutsideClick() {
      this.open = false;
    }
  }
};
</script>

<style scoped>
</style>
