<template>
  <transition name="modal">
    <div class="fixed z-50 pin overflow-auto bg-grey-darkest-half">
      <div class="shadow-inner relative m-auto mt-32 bg-white rounded w-72">
        <div class="text-center px-4 pt-4">
          <slot name="header">Create New List</slot>
        </div>

        <div class="p-4">
          <slot name="body">
            <input
              type="text"
              placeholder="List Name"
              class="border border-grey-light p-2 rounded w-full"
            >
          </slot>
        </div>

        <div class="p-4 flex border border-t justify-end rounded-b">
          <slot name="footer">
            <button
              class="border border-grey font-bold text-sm py-2 px-4 rounded mr-2"
              @click="$emit('close')"
            >Cancel</button>
            <button
              class="bg-blue hover:bg-blue-dark text-sm text-white font-bold py-2 px-4 rounded"
              @click="$emit('close')"
            >Save</button>
          </slot>
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
