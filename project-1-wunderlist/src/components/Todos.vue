<template>
  <div>
    <div class="flex items-center bg-indigo-darkest px-3 py-2 rounded focus:outline-0 mb-2">
      <svg
        class="h-5 w-5"
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        style="fill:#fff;"
      >
        <g>
          <path
            d="M10,10l0,6.5c-0.003,0.053 -0.008,0.103 -0.024,0.155c-0.038,0.116 -0.12,0.217 -0.226,0.278c-0.047,0.027 -0.094,0.042 -0.146,0.056c-0.052,0.008 -0.051,0.008 -0.104,0.011c-0.053,-0.003 -0.103,-0.008 -0.155,-0.024c-0.15,-0.05 -0.271,-0.171 -0.321,-0.321c-0.016,-0.052 -0.021,-0.102 -0.024,-0.155l0,-6.5l-6.5,0c-0.046,-0.002 -0.058,-0.001 -0.104,-0.011c-0.103,-0.022 -0.197,-0.076 -0.268,-0.154c-0.169,-0.188 -0.169,-0.482 0,-0.67c0.035,-0.038 0.077,-0.072 0.122,-0.098c0.078,-0.045 0.161,-0.062 0.25,-0.067l6.5,0l0,-6.5c0.005,-0.089 0.022,-0.172 0.067,-0.25c0.126,-0.219 0.406,-0.31 0.636,-0.207c0.048,0.022 0.093,0.05 0.132,0.085c0.078,0.071 0.132,0.165 0.154,0.268c0.01,0.046 0.009,0.058 0.011,0.104l0,6.5l6.5,0c0.046,0.002 0.058,0.001 0.104,0.011c0.103,0.022 0.197,0.076 0.268,0.154c0.169,0.188 0.169,0.482 0,0.67c-0.035,0.038 -0.077,0.072 -0.122,0.098c-0.078,0.045 -0.161,0.062 -0.25,0.067l-6.5,0Z"
          ></path>
        </g>
      </svg>
      <input
        class="font-light text-white bg-indigo-darkest p-2 w-full focus:outline-none"
        placeholder="Add a todo..."
        v-model="newTodo"
        @keyup.enter="addTodo($event.target.value)"
      >
    </div>
    <transition-group name="fade">
      <Todo
        class="bg-grey-lighter text-black font-normal flex rounded mb-1 px-3 py-2"
        @updateTodoStatus="updateTodoStatus($event)"
        v-for="item in getIncompletedTodos()"
        v-bind:key="item.id"
        :id="item.id"
        :title="item.title"
        :status="item.status"
      />
    </transition-group>
    <button
      @click="showCompletedTodos=!showCompletedTodos"
      v-if="getCompletedTodos().length > 0"
      class="focus:outline-none uppercase text-xs p-1 px-4 mt-5 bg-indigo-darkest text-white rounded self-start tracking-wide"
    >show completed to-dos</button>
    <div v-if="showCompletedTodos" class="mt-3">
      <Todo
        class="bg-grey-lighter text-black font-normal flex rounded mb-1 px-3 py-2 line-through opacity-50"
        @updateTodoStatus="updateTodoStatus($event)"
        v-for="item in getCompletedTodos()"
        v-bind:key="item.id"
        :id="item.id"
        :title="item.title"
        :status="item.status"
      />
    </div>
  </div>
</template>
<script>
import Todo from "./Todo.vue";
import ListStore from "../stores/ListStore";

export default {
  data: function() {
    return {
      newTodo: null,
      ListStore: ListStore,
      showCompletedTodos: false
    };
  },
  components: {
    Todo
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      try {
        const listIndex = this.$route.params.id - 1;
        this.$route.params.todos = ListStore.data.lists[listIndex].todos;
      } catch (error) {
        alert("your list doesn't exist", error);
      }
    },
    addTodo: function(title) {
      const listIndex = this.$route.params.id - 1;
      this.ListStore.methods.addTodo(title, listIndex);
      this.newTodo = null;
    },
    getIncompletedTodos: function() {
      return this.$route.params.todos.filter(todo => {
        return todo.status === false;
      });
    },
    getCompletedTodos: function() {
      return this.$route.params.todos.filter(todo => {
        return todo.status === true;
      });
    },
    updateTodoStatus: function(id) {
      return this.$route.params.todos.map(todo => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
      });
    }
  }
};
</script>
