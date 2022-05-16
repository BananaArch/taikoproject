<template>
  <div class="container">
    <div class="row">
        <h3 class="pt-3">Our Categories</h3>
    </div>
  </div>
  <div class = "row w-100 h-100">
    <div v-for="category of categories" :key = "category.id" class = "col-xl-4 col-md-6 col-12 pt-3 d-flex">
        <CategoryBox :category = "category"></CategoryBox>
    </div>   
  </div>
</template>
<script>
const axios = require("axios");
import CategoryBox from '../../components/Category/CategoryBox.vue'
export default {
  name: "CategoryBox",
  components: {CategoryBox},
  data() {
    return {
        baseURL: "localhost:8080",
        categories: []
    };
  },
  methods: {
      async getCategories() {
          await axios
          .get(`${this.baseURL}/api/v1/category/list`)
          .then(res => this.categories = res.data)
          .catch(err => console.log(err)) 
      }
  },
  mounted() {
      this.getCategories();
  }
};
</script>
<style scoped></style>