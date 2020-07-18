<template>
  <div id="app">
    <Header />
    <AddPoem v-on:add-poem="addPoem" />
    <Poems v-bind:poems="poemsArray" v-on:del-poem="deletePoem" />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Poems from "./components/Poems";
import AddPoem from "./components/AddPoem";

export default {
  name: "App",
  components: {
    Header,
    Poems,
    AddPoem,
  },
  data() {
    return {
      poemsArray: [
        {
          id: 1,
          title: "Frühling",
          author: "Christian Morgenstern",
          isFavouritePoem: false,
        },
        {
          id: 2,
          title: "Sonnenuntergang",
          author: "Christian Morgenstern",
          isFavouritePoem: true,
        },
        {
          id: 3,
          title: "Erlkönig",
          author: "Johann Wolfgang von Goethe",
          isFavouritePoem: true,
        },
      ],
    };
  },
  methods: {
    deletePoem(id) {
      this.poemsArray = this.poemsArray.filter((poem) => poem.id !== id);
    },
    addPoem(newPoem) {
      this.poemsArray = [...this.poemsArray, newPoem];
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Poppins, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #3f8d7d;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #0c7762;
}
</style>
