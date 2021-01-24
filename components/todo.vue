<template >
     <div class="row">
    <div style="background-color: #582E48!important"
         class="p-2 mb-3 text-light bg-dark col-md-8 offset-2 shadow card d-flex justify-content-center flex-row align-items-center">
      <p class="m-0 w-100">{{todo.message}}</p>
      <button @click="window(todo)"  class="btn btn-sm btn-outline-warning flex-shrink-1 mr-1">Düzenle</button>
      <button @click="remove" class="btn btn-sm btn-outline-danger flex-shrink-1">X</button>
    </div>
  </div>
</template>
<script>
export default {
    props:{
      todo:{
        type:Object
      }
    },
    methods: {
      remove(){
        this.$store.dispatch("removeTodo",this.todo)
      },
      window(todo){
        this.$store.dispatch("uptadeTodo",todo)
        this.$store.commit("setWindow",true)
      }
    },
}
</script>
