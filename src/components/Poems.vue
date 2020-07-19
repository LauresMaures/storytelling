<template>
  <div>
    <div v-bind:key="singlePoem.id" v-for="singlePoem in poems">
      <Poem
        v-bind:poem="singlePoem"
        v-on:del-poem="$emit('del-poem', singlePoem.id)"
      />
    </div>
  </div>
</template>

<script>
import Poem from "./Poem.vue";

export default {
  name: "Poems",
  components: {
    Poem,
  },
  props: ["poems"],
};
</script>

<style scoped></style>
