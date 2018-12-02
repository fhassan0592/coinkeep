<template>
  <div id="app">
    <app-navbar />
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view id="view"/>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: {
    'app-navbar': Navbar
  },
  created() {
    this.$store.dispatch('retrieveAuthData');
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Unica+One');
@import url('https://fonts.googleapis.com/css?family=Karla');

#view {
  font-family: 'Karla';
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
