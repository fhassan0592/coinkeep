<template>
  <div class="container">
    <h3>My Coins</h3>
    <hr>
    <app-card-list :coins="coins" />
  </div>
</template>

<script>
  import { store } from '../store.js';
import CardList from './Card/CardList';

  export default {
    beforeRouteEnter(to, from, next) {
      store.dispatch('retrieveAuthData')
        .then(res => store.getters.tokenGetter ? next() : next('/login', {
          replace: true
        }));
    },
    created() {
        this.$store.dispatch('getCoinsAction')
        .then(() => this.coins = this.$store.getters.coinsGetter)
        .catch(err => this.error = err.response.err);
    },
    components: {
        'app-card-list': CardList
    },
    data() {
        return {
            coins: '',
            error: ''
        }
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 4%;
  }
</style>