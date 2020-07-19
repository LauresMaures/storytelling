<template>
  <div>
    <form @submit="addPoem">
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Titel des Gedichts"
      />
      <input
        type="text"
        v-model="author"
        name="author"
        placeholder="Dichter*in"
      />
      <input type="submit" value="Hinzufügen" class="btn" />
    </form>
  </div>
</template>

<script>
//import uuid from "uuid";

export default {
  name: "AddPoem",
  data() {
    return {
      title: "",
      author: "",
    };
  },
  methods: {
    addPoem(e) {
      //prevent submitting to a file:
      e.preventDefault();
      const newPoem = {
        //uuid.v4(), //no longer needed as JSON Placeholder gives us an ID
        title: this.title,
        author: this.author,
        isFavouritePoem: false,
      };
      //send up to parent by emitting an event:
      this.$emit("add-poem", newPoem);

      //clear text fields afterwards:
      this.title = "";
      this.author = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>
