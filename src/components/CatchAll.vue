<template>
  <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Umm...</h1>
        <p class="lead">These are not the droids you're looking for?</p>
        <hr class="my-4">
        <button class="btn btn-danger" @click.prevent="goBack">
          <i class="fa fa-arrow-left mr-2"></i>
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            return this.$store.getters.tokenGetter ? this.$router.replace('/profile') : this.$router.replace('/');
        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 4%;
    }
</style>
