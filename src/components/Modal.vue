<template>
  <div class="modal fade show backdrop">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-light">
        <div
          v-if="title"
          class="modal-header justify-content-center"
        >
          <h5 class="modal-title">{{title}}</h5>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div
          v-if="actions"
          class="modal-footer"
        >
          <div
            v-for="action in actions"
            :key="action.label"
            :class="['btn', action.class]"
            @click="$emit('result', action.value)"
          >{{action.label}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: String,
    actions: Array
  }
};
</script>

