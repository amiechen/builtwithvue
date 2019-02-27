import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../components/Todo.vue";

const routes = [{ path: "/list/:id", component: Todo }];

export default new VueRouter({
  routes: routes
});

Vue.use(VueRouter);
