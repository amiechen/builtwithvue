<template>
  <div class="flex items-center">
    <input class="mr-2 h-6" type="checkbox">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>
