<template >
  <span>
    <h3 class="text-center">Express.js ile ToDo App | Nuxt.js</h3>
    <div class="row">
      <div class="col-md-6 offset-3 mt-5 d-flex">
        <input
          type="text"
          class="form-control form-control-lg mr-1"
          v-model="message"
        />
        <button @click="addTodo" class="btn btn-outline-dark">Ekle</button>
      </div>
    </div>
    <h3 class="text-center mt-5 mb-3">Yapılacaklar Listesi</h3>
  </span>
</template>
<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    addTodo() {
      if (this.message == "") {
        alert("Do not add emty todo");
      } else {
        this.$store.dispatch("addTodo", this.message);
      }
    },
  },
};
</script>
