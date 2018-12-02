<template>
  <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">CoinKeep</h1>
        <p class="lead">This is a simple budget-tracking app. A coin is basically a fancy alias for 'budget'.</p>
        <hr class="my-4">
        <p>Please note that this app is for demo purposes only. Any information you enter on here may have the potential to be compromised.</p>
        <router-link to="/login" tag="a" exact class="btn btn-primary mr-3">
            Login to get started
        </router-link>
        or
        <router-link to="/signup" tag="a" exact class="btn btn-outline-info ml-3">
            Signup here for an account
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container {
        margin-top: 4%;
    }
</style>
