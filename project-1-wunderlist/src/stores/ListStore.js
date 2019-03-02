const ListStore = {
  data: {
    lists: [
      {
        id: 1,
        name: "grocery",
        todos: [
          { id: 1, title: "milk", status: false },
          { id: 2, title: "tumeric", status: false },
          { id: 3, title: "butter", status: true }
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
        todos: [{ id: 1, title: "jellybeana", status: false }]
      }
    ]
  },
  methods: {
    addTodo: function(title, listIndex) {
      const selectedTodos = ListStore.data.lists[listIndex].todos;
      selectedTodos.push({
        id: selectedTodos.length + 1,
        title: title,
        status: false
      });
    }
  }
};

export default ListStore;
