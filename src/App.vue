<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="https://your-logo-url.png" alt="Logo" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="fas fa-home"></i> Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">
                <i class="fas fa-info-circle"></i> About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">
                <i class="fas fa-cubes"></i> Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin" class="nav-link">
                <i class="fas fa-user-lock"></i> Admin
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">
                <i class="fas fa-address-book"></i> Contacts
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
<NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue'
export default{
  component:{
  NavbarComp , FooterComp}
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
