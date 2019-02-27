<template>
  <div>
    <Account/>
    <Lists/>
  </div>
</template>
<script>
import Account from "./Account.vue";
import Lists from "./Lists.vue";

export default {
  components: {
    Account,
    Lists
  },
  data() {
    return {};
  }
};
</script>