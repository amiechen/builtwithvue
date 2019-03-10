<template>
  <transition name="fade">
    <div class="fixed z-50 pin overflow-auto bg-grey-darkest-half" id="test-modal">
      <div class="shadow-inner relative m-auto mt-32 bg-white rounded w-72 text-sm">
        <div class="text-center px-4 pt-4">
          <h3 slot="header">Create New List</h3>
        </div>
        <div class="p-4">
          <input
            type="text"
            placeholder="List Name"
            v-model="newListName"
            @keyup.enter="createList"
            class="border border-grey-light p-2 py-3 rounded w-full focus:border-blue-light focus:outline-none"
          >
        </div>
        <div class="px-4 py-3 flex border border-t justify-end rounded-b">
          <button
            class="border border-grey font-bold text-sm text-grey-dark py-2 px-5 rounded mr-2"
            @click="$emit('close')"
          >Cancel</button>
          <button
            class="bg-blue hover:bg-blue-dark text-sm text-white font-bold py-2 px-5 rounded"
            @click="createList"
          >Save</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ListStore from "../stores/ListStore";

export default {
  data: function() {
    return {
      ListStore: ListStore.data,
      newListName: null
    };
  },
  methods: {
    createList: function() {
      this.ListStore.lists.push({
        id: this.ListStore.lists.length + 1,
        name: this.newListName,
        todos: []
      });
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.bg-grey-darkest-half {
  background: rgba(0, 0, 0, 0.4);
}
.w-72 {
  width: 24rem;
}
</style>
