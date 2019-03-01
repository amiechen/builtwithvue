import Vue from "vue";
import router from "./router";
import "@/assets/css/tailwind.css";
import App from "./App.vue";

const shared = {
  lists: [
    {
      id: 1,
      name: "grocery",
      todos: [
        { id: 1, title: "milk", status: false },
        { id: 2, title: "tumeric", status: false }
      ]
    },
    {
      id: 2,
      name: "books",
      todos: [
        { id: 1, title: "poor charlie's almanec", status: false },
        { id: 2, title: "deep work", status: false }
      ]
    },
    {
      id: 3,
      name: "wishlists",
      todos: [
        { id: 1, title: "jellybeana", status: false },
        { id: 2, title: "play some boardgame", status: false }
      ]
    }
  ]
};

shared.install = function() {
  Object.defineProperty(Vue.prototype, "$globalData", {
    get() {
      return shared;
    }
  });
};

Vue.use(shared);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
