import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "../components/Todos.vue";

const routes = [{ path: "/list/:id", component: Todos }];

export default new VueRouter({
  routes: routes
});

Vue.use(VueRouter);
