<template>
  <div>
    <h1>Todo :</h1>
    <form @submit="addTodo">
      <input type="text" class="form-control" v-model="input" />
      <button class="btn btn-success">Submit</button>
    </form>
    <div>
      <h2>Saved :</h2>
      <pre>
       {{ saved }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},

  data() {
    return {
      input: "",
      saved: ""
    };
  },

  methods: {
    addTodo(e) {
      e.preventDefault();

      this.axios
        .post("http://localhost:4000/api/todos", {
          title: this.input
        })
        .then(response => {
          this.saved = response.data;
        })
        .catch(error => {
          this.saved = error;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
