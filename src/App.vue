<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/*main sections*/
.padding {
  padding-bottom: 2rem;
}
.main {
  width: 75%;
  margin: 0 auto;
  padding-top: 2rem;
}
.main hr {
  border-top: 2px solid #b4b4b4;
  width: 31.5%;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
}
</style>
