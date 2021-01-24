export const state = () => ({
  todos: [],
  window: false,
  updatedTodo: null
});
export const mutations = {
  setTodo(state, todo) {
    state.todos = todo;
  },
  setWindow(state, window) {
    state.window = window;
  },
  setUpdatedTodo(state, uptadeTodo) {
    state.updatedTodo = uptadeTodo;
  }
};
export const actions = {
  nuxtServerInit(vuexContext, contex) {
    return contex.$axios.get("/").then(response => {
      vuexContext.commit("setTodo", response.data.todos);
    });
  },
  addTodo(vuexContext, todo) {
    this.$axios.post("/add-todo", { todo: todo }).then(response => {
      vuexContext.commit("setTodo", response.data.todos);
    });
  },
  removeTodo(vuexContext, todo) {
    this.$axios.post("/remove-todo", { todo: todo }).then(response => {
      vuexContext.commit("setTodo", response.data.todos);
    });
  },
  uptadeTodo(vuexContext, todo) {
    vuexContext.commit("setUpdatedTodo", todo);
  },
  chanceTodo(vuexContext, todo) {
    this.$axios.post("/uptade-todo", { todo: todo }).then(response => {
      vuexContext.commit("setTodo", response.data.todos);
      vuexContext.commit("setWindow",false)
    });
  }
};
export const getters = {
  getTodos(state) {
    return state.todos;
  },
  getWindow(state) {
    return state.window;
  },
  getUptadeTodo(state) {
    let todo = { ...state.updatedTodo };
    
    return todo;
  }
};
