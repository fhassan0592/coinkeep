<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/profile" tag="a" class="navbar-brand" exact v-if="isAuthenticated">
          <span class="text-muted">Coin</span>
          <img :src="brand" width="30" height="30">
          <span class="text-muted">Keep</span>
      </router-link>
      <router-link to="/" tag="a" class="navbar-brand" exact v-else>
          <span class="text-muted">Coin</span>
          <img :src="brand" width="30" height="30">
          <span class="text-muted">Keep</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" tag="a" class="nav-link" exact v-if="!isAuthenticated">
                Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" tag="a" class="nav-link" exact v-if="!isAuthenticated">
                Signup
            </router-link>
            <button class="btn btn-secondary btn-sm" @click.prevent="logout" v-else>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import brand from '../assets/img/bank.png';

  export default {
      data() {
          return {
              brand
          }
      },
      computed: {
        isAuthenticated() {
          return this.$store.getters.tokenGetter;
        }
      },
      methods: {
        logout() {
          this.$store.dispatch('destroyAuthData')
          .then(res => this.$router.replace('/login'));
        }
      }
  }
</script>

<style scoped>
    .navbar {
        font-family: 'Unica One';
    }
    .navbar-brand {
        font-weight: bold;
    }
</style>