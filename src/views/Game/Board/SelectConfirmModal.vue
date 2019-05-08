<template>
  <div class="modal fade show backdrop">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-light">
        <div class="modal-header justify-content-center">
          <h5 class="modal-title">Confirm</h5>
        </div>
        <div class="modal-body">
          Choosing <span class="font-weight-bold text-capitalize">{{word}}</span>?
        </div>
        <div class="modal-footer">
          <div
            class="btn btn-secondary"
            @click="$emit('result', true)"
          >YES</div>
          <div
            class="btn btn-light"
            @click="$emit('result', false)"
          >NO</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectConfirmModal",
  props: {
    word: {
      type: String,
      required: true
    }
  }
};
</script>
