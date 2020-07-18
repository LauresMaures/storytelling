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
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
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
      this.poemsArray = this.poemsArray.filter((poem) => poem.id !== id);
    },
    addPoem(newPoem) {
      this.poemsArray = [...this.poemsArray, newPoem];
    },
  },
  //runs right away:
  created() {
    axios
      .get("https://github.com/LauresMaures/storytelling/blob/master/db.json")
      .then((res) => (this.poemsArray = res.data))
      .catch((err) => console.log(err));
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
