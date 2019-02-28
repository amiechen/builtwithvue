<template>
  <div>
    <div class="flex items-center bg-indigo-darkest px-3 py-2 rounded focus:outline-0 mb-2">
      <img src="../assets/icons/add.svg" alt="list" class="h-5 w-5">
      <input class="font-light text-white bg-indigo-darkest p-2 w-full" placeholder="Add a todo...">
    </div>
    <Todo
      class="bg-grey-lighter text-black font-light flex rounded mb-1 px-3 py-4"
      v-for="item in items"
      v-bind:key="item.id"
      :title="item.title"
    />
  </div>
</template>
<script>
import Todo from "./Todo.vue";

export default {
  components: {
    Todo
  },
  data() {
    return {
      items: [
        { id: 1, title: "buy milk", done: false },
        { id: 2, title: "read a book", done: false }
      ]
    };
  }
};
</script>
