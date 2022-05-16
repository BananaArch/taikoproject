<template>
    <div class = "container">
        <div class = "row">
            <div class = "text-center">
                <h3>Add Category</h3>
            </div>
        </div>
        <form>
            <div class = "form-group">
                <label>Name</label>
                <input type = "text" class = "form-control" v-model = "name">
            </div>
            <div class = "form-group">
                <label>Description</label>
                <textarea type = "text" class = "form-control" v-model = "description"></textarea>
            </div>
            <div class = "form-group">
                <label>Image URL</label>
                <input type = "text" class = "form-control" v-model = "image">
            </div>
            <button type = "button" class = "btn btn-primary" @click = "addCategory"> Submit </button>
        </form>
    </div>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
    data() {
        return {
            name: "",
            desciption: "",
            image: "",
        };
    },
    methods: {
        addCategory() {
            const newCategory = {
                name: this.name,
                description: this.description,
                image: this.image,
            };

            const baseURL = "localhost:8080";

            axios({
                method: "post",
                url: `${baseURL}/api/v1/category/create`,
                data: JSON.stringify(newCategory),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                sweetalert({
                    text: "Category added successfully",
                    icon: "Success",
                });
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
};
</script>
<style scoped></style>