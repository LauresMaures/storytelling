<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"
        ><img src="../../assets/feder_icon.png"
      /></router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link"
              >Das Gesprochene Wort</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/impressions" class="nav-link"
              >Ausgewählte Gedichte</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/myfavouritepoems" class="nav-link"
              >Meine Lieblingsgedichte</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Über mich</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.navbar {
  padding: 0.8rem; /*1rem = 1em = 16 pixels*/
}
.navbar-nav li {
  padding-right: 20px;
}
.nav-link {
  font-size: 1.1em !important;
}
</style>
