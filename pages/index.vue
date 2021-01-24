<template>
  <div class="container main-container pt-5">
    <add-todo />
    <todo v-for="todo in todos" :key="todo._id" :todo="todo" />
    <edit-todo />
  </div>
</template>

<script>
import addTodo from "@/components/addTodo";
import todo from "@/components/todo";
import editTodo from "@/components/editTodo";
export default {
  components: {
    addTodo,
    todo,
    editTodo,
  },
  computed:{
    todos(){
      return this.$store.getters.getTodos
    }
  }
};
</script>

<style>
body {
  background-color: #dedede;
}

.update-container {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  visibility:hidden
}

.main-container {
  z-index: 0;
}
</style>
