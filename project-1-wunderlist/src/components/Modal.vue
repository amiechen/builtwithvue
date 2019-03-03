<template>
  <transition name="modal">
    <div class="fixed z-50 pin overflow-auto bg-grey-darkest-half">
      <div class="shadow-inner relative m-auto mt-32 bg-white rounded w-72 text-sm">
        <div class="text-center px-4 pt-4">
          <slot name="header">header</slot>
        </div>
        <div class="p-4">
          <slot name="body"></slot>
        </div>
        <div class="px-4 py-3 flex border border-t justify-end rounded-b">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-grey-darkest-half {
  background: rgba(0, 0, 0, 0.4);
}
.w-72 {
  width: 24rem;
}
</style>
