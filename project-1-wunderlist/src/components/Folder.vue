<template>
  <div>
    <div class="flex px-3 py-2 justify-between items-center">
      <div class="flex items-center">
        <img src="../assets/icons/folder.svg" alt="folder" class="mr-2 h-5 w-5 mb-1">
        <p class="font-light">folder name</p>
      </div>
      <p class="text-xs text-grey">3</p>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";

export default {
  components: {
    List
  },
  data() {
    return {
      lists: 3
    };
  }
};
</script>
