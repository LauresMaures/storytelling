<template>
  <div class="poem" v-bind:class="{'is-Not-Favourite-Poem':!poem.isFavouritePoem}">
    <p>
      <input type="checkbox" v-on:change="markNotFavourite" />
      {{poem.title}} von {{poem.author}}
      <button
        @click="$emit('del-poem', poem.id)"
        class="del"
      >x</button>
    </p>
    <br />
  </div>
</template>

<script>
export default {
  name: "Poem",
  props: ["poem"],
  methods: {
    markNotFavourite() {
      this.poem.isFavouritePoem = !this.poem.isFavouritePoem;
    }
  }
};
</script>

<style scoped>
.poem {
  background: #8dc9bd; /* #5595ff; */
  padding: 5px;
  border-bottom: 2px #ffffff dotted;
}

.is-Not-Favourite-Poem {
  text-decoration: line-through;
}

.del {
  background: #3f8d7d;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

.del:hover {
  background: #0c7762;
}
</style>