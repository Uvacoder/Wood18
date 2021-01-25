<template>
    <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon class="grey--text"></v-app-bar-nav-icon>
        <router-link :to='home' class="home-title"><h4>Woodwork</h4></router-link>
      <v-spacer></v-spacer>
      <div v-if="woodworker.loggedIn === false">
        <v-btn router :to="login" color="success" dark rounded small>
        Login
        </v-btn>
      </div>
      <div v-else @click="handleLogout">
        <v-btn v-if="['Dashboard'].includes($route.name)" color="success" dark rounded small>
        Logout
        </v-btn>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    home: '/',
    login: '/login'
  }),
  computed: {
    ...mapGetters({
      woodworker: "woodworker"
    })
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-title {
    text-decoration: none !important;
    color: #FB643A;
  }
</style>