<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <h3>Edit Coin</h3>
        <hr>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Email</label>
              <input type="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <label>Address</label>
            <input type="text" class="form-control" placeholder="1234 Main St">
          </div>
          <div class="form-group">
            <label>Address 2</label>
            <input type="text" class="form-control" placeholder="Apartment, studio, or floor">
          </div>
          <button class="btn btn-primary">Sign in</button>
        </form>
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
