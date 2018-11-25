<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="">
          <span class="text-muted">Coin</span>
          <img :src="brand" width="30" height="30">
          <span class="text-muted">Keep</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Signup</a>
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