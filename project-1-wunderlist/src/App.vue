<template>
  <div id="app" class="flex w-full m-0 p-0 bg-indigo-darker min-h-screen">
    <Sidepanel class="flex flex-col w-64 bg-grey-lighter min-h-screen"/>
    <Content class="flex flex-1 p-4 flex-col"/>
  </div>
</template>

<script>
import Sidepanel from "./components/Sidepanel.vue";
import Content from "./components/Content.vue";

export default {
  name: "app",
  components: {
    Sidepanel,
    Content
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
