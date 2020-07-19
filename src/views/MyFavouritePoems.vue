<template>
  <div class="favpoems container-fluid padding">
    <div class="main text-center">
      <div class="col-12">
        <h1 class="display-4">Meine Lieblingsgedichte</h1>
      </div>
      <div class="col-12">
        <AddPoem v-on:add-poem="addPoem" />
        <Poems v-bind:poems="poemsArray" v-on:del-poem="deletePoem" />
      </div>
    </div>
  </div>
</template>

<script>
import Poems from "../components/Poems";
import AddPoem from "../components/AddPoem";
import axios from "axios";

export default {
  name: "MyFavouritePoems",
  components: {
    Poems,
    AddPoem,
  },
  data() {
    return {
      poemsArray: [],
    };
  },
  methods: {
    deletePoem(id) {
      axios
        .delete(
          `https://my-json-server.typicode.com/LauresMaures/storytelling/poems/${id}`
        )
        .then(
          () =>
            (this.poemsArray = this.poemsArray.filter((poem) => poem.id !== id)) //or: res.data.id != id
        )
        .catch((err) => console.log(err));
    },
    addPoem(newPoem) {
      const { title, author, isFavouritePoem } = newPoem;
      axios
        .post(
          "https://my-json-server.typicode.com/LauresMaures/storytelling/poems",
          {
            title, //usually it would be 'title: title' but with ES6 'title' is enough
            author,
            isFavouritePoem,
          }
        )
        .then((res) => (this.poemsArray = [...this.poemsArray, res.data]))
        .catch((err) => console.log(err));
    },
  },
  //runs right away:
  created() {
    axios
      .get(
        "https://my-json-server.typicode.com/LauresMaures/storytelling/poems"
      )
      .then((res) => (this.poemsArray = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.btn {
  display: inline-block;
  border: none;
  background: #3f8d7d;
  color: #3f8d7d;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #0c7762;
}
</style>
