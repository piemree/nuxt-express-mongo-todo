<template >
  <div
    :style="window"
    class="update-container container-fluid d-flex flex-column justify-content-center align-items-center"
  >
    <div class="card shadow pt-2 pb-2" style="width: 30rem">
      <div class="card-body">
        <h5 class="card-title">Kaydı Düzenle</h5>
        <input type="text" class="form-control mt-3 mb-3" v-model="todo.message" />
        <a
          @click="closeWindow"
          href="#"
          class="card-link btn btn-sm btn-outline-danger"
          >vazgeç</a
        >
        <a @click="uptade(todo)" href="#" class="card-link btn btn-sm btn-outline-warning"
          >Güncelle</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    window() {
      if (this.$store.getters.getWindow) {
        return "visibility:visible";
      } else {
        return "visibility:hidden";
      }
    },
    todo() {
      return this.$store.getters.getUptadeTodo;
    },
  },
  methods: {
    closeWindow() {
      this.$store.commit("setWindow", false);
    },
    uptade(todo){
      this.$store.dispatch("chanceTodo",todo)
    }
  },
};
</script>
