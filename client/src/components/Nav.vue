<template>
  
<nav class="navbar container is-fixed-top is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://damp-chamber-63928.herokuapp.com/">
      <img src="../assets/logo.png" height="28">
    </a>

    <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu "  :class="{ 'is-active': isActive }">
    <div class="navbar-start">
      <router-link to="/"  class="navbar-item" >Home</router-link>
      <router-link to="/about"  class="navbar-item" >About</router-link>
      <router-link to="/feed"  class="navbar-item" >Feed</router-link>
      <router-link v-if="session.user" to="/record"  class="navbar-item" >Record</router-link>

      <div v-if="session.user && session.user.name==='Admin'" class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link"> Admin </a>

        <div class="navbar-dropdown">
          <router-link to="/users"  class="navbar-item" >Users</router-link>
          <router-link to="/admin"  class="navbar-item" >Edit exercises</router-link>
        </div>
      </div>
    </div>
 </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <LoginBadge />
      </div>
    </div>
</nav>


</template>

<script>
import LoginBadge from "@/components/LoginBadge";
import session from "@/models/session";
export default {
  data: ()=> ({
      isActive: false,
      session
  }),
  methods: {

  },
  components: {
    LoginBadge
  }

}
</script>

<style>

</style>