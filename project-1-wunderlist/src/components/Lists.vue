<template>
  <div class="justify-between">
    <div>
      <router-link
        :to="{path:`/list/${list.id}`, query:{ todos: list.todos}}"
        v-for="list in lists"
        v-bind:key="list.index"
        class="no-underline text-black"
      >
        <div class="flex px-3 py-2 justify-between items-center">
          <div class="flex items-center">
            <svg
              class="mr-2 h-5 w-5 mb-1"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="fill: #b9b9b9;"
            >
              <g id="Web-svgs" stroke="none" stroke-width="1" fill-rule="evenodd">
                <g id="list">
                  <path
                    d="M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z"
                    id="K"
                  ></path>
                </g>
              </g>
            </svg>
            <p>{{list.name}}</p>
          </div>
          <p class="text-xs text-grey font-light">3</p>
        </div>
      </router-link>
    </div>
    <Folder v-for="folder in folders" v-bind:key="folder.id"/>
    <div
      class="flex items-center border-t border-grey-light px-3 py-4 fixed pin-b w-64 text-blue hover:cursor-pointer"
      v-on:click="createList()"
    >
      <svg
        class="mr-1 h-5 w-5"
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        style="fill:#328ad6;"
      >
        <g>
          <path
            d="M10,10l0,6.5c-0.003,0.053 -0.008,0.103 -0.024,0.155c-0.038,0.116 -0.12,0.217 -0.226,0.278c-0.047,0.027 -0.094,0.042 -0.146,0.056c-0.052,0.008 -0.051,0.008 -0.104,0.011c-0.053,-0.003 -0.103,-0.008 -0.155,-0.024c-0.15,-0.05 -0.271,-0.171 -0.321,-0.321c-0.016,-0.052 -0.021,-0.102 -0.024,-0.155l0,-6.5l-6.5,0c-0.046,-0.002 -0.058,-0.001 -0.104,-0.011c-0.103,-0.022 -0.197,-0.076 -0.268,-0.154c-0.169,-0.188 -0.169,-0.482 0,-0.67c0.035,-0.038 0.077,-0.072 0.122,-0.098c0.078,-0.045 0.161,-0.062 0.25,-0.067l6.5,0l0,-6.5c0.005,-0.089 0.022,-0.172 0.067,-0.25c0.126,-0.219 0.406,-0.31 0.636,-0.207c0.048,0.022 0.093,0.05 0.132,0.085c0.078,0.071 0.132,0.165 0.154,0.268c0.01,0.046 0.009,0.058 0.011,0.104l0,6.5l6.5,0c0.046,0.002 0.058,0.001 0.104,0.011c0.103,0.022 0.197,0.076 0.268,0.154c0.169,0.188 0.169,0.482 0,0.67c-0.035,0.038 -0.077,0.072 -0.122,0.098c-0.078,0.045 -0.161,0.062 -0.25,0.067l-6.5,0Z"
          ></path>
        </g>
      </svg>
      <p class="text-sm">Create List</p>
    </div>
  </div>
</template>

<script>
import Folder from "./Folder.vue";

export default {
  components: {
    Folder
  },
  methods: {
    createList: function() {
      this.lists.push({
        id: this.lists.length + 1,
        name: ""
      });
    }
  },
  data() {
    return {
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
      ],
      folders: []
    };
  }
};
</script>
