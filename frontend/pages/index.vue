<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Vue Axios Post</div>

          <div class="card-body">
            <form @submit="formSubmit">
              <strong>Name:</strong>

              <input type="text" class="form-control" v-model="name" />
              <button class="btn btn-success">Submit</button>
            </form>

            <strong>Output:</strong>
            <pre>
              {{output}}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

     

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },

  data() {
    return {
      name: "",
      output: ""
    };
  },

  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;

      this.axios
        .post("http://localhost:4000/api/todos", {
          title: this.name
        })

        .then(function(response) {
          currentObj.output = response.data;
        })

        .catch(function(error) {
          currentObj.output = error;
        });
    }
  }
};
</script>

<style>
</style>
