<template>
  <div class="col-lg-6">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ coin.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ coin.description }}</h6>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['coin']
}
</script>

<style>

</style>
