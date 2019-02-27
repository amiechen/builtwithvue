<template>
  <div id="app" class="w-full m-0 p-0 bg-blue-darker min-h-screen">
    <Sidepanel class="flex flex-col w-64 bg-grey-lighter min-h-screen"/>
  </div>
</template>

<script>
import Sidepanel from "./components/Sidepanel.vue";

export default {
  name: "app",
  components: {
    Sidepanel
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
