<template>
  <a href="/" class="flex items-center text-white p-2 block">
    <img :src="user.avatar" alt="user-avatar" class="w-8 h-8 rounded-full mr-3">
    <label class="text-black leading-none">{{user.email}}</label>
  </a>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "sallycantdance@gmail.com",
        avatar: "https://randomuser.me/api/portraits/women/17.jpg"
      }
    };
  }
};
</script>
