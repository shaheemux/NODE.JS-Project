<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="https://i.ibb.co/18BSHm1/sunpower-innovations-high-resolution-logo-transparent-1.png" alt="" height="30">
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
            <router-link to="/contacts" class="nav-link">
              <i class="fas fa-address-book"></i> Contacts
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar-nav .nav-item {
  margin-right: 10px;
}

.navbar-nav .nav-link {
  color: white;
}

.navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 0.75);
}
</style>
