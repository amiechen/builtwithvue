<template>
  <div class="justify-between">
    <div>
      <List v-for="list in lists" v-bind:key="list.index"/>
    </div>
    <!-- <Folder v-for="folder in folders" v-bind:key="folder.index"/> -->
    <div class="flex items-center border-t border-grey-light p-2 fixed pin-b w-64 text-blue">
      <img src="../assets/icons/add.svg" alt="list" class="mr-2 h-5 w-5 mb-1">
      <p class="font-light text-sm">Create List</p>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import Folder from "./Folder.vue";
export default {
  components: {
    List,
    Folder
  },
  data() {
    return {
      lists: 3,
      folders: 2
    };
  }
};
</script>
