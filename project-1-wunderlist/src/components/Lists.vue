<template>
  <div class="justify-between">
    <div>
      <router-link
        :to="`/list/${list.id}`"
        v-for="list in lists"
        v-bind:key="list.index"
        class="no-underline text-black"
      >
        <div class="flex px-3 py-2 justify-between items-center">
          <div class="flex items-center">
            <img src="../assets/icons/list.svg" alt="list" class="mr-2 h-5 w-5 mb-1">
            <p class="font-light">list name</p>
          </div>
          <p class="text-xs text-grey">3</p>
        </div>
      </router-link>
    </div>
    <Folder v-for="folder in folders" v-bind:key="folder.id"/>
    <div class="flex items-center border-t border-grey-light p-2 fixed pin-b w-64 text-blue">
      <img src="../assets/icons/add.svg" alt="list" class="mr-2 h-5 w-5 mb-1">
      <p class="font-light text-sm">Create List</p>
    </div>
  </div>
</template>

<script>
import Folder from "./Folder.vue";

export default {
  components: {
    Folder
  },
  data() {
    return {
      lists: [
        { id: 1, name: "grocery" },
        { id: 2, name: "books" },
        { id: 3, name: "wishlists" }
      ],
      folders: []
    };
  }
};
</script>
