<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <h3>Log in</h3>
        <small class="text-muted">If you were redirected to this page after signing up, your account was created successfully.<br>Please log in.</small>
        <hr>
        <form>
          <transition name="fade" mode="out-in">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
          </transition>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Username</label>
              <input type="email" class="form-control" placeholder="Your Username" v-model="loginData.username">
            </div>
            <div class="form-group col-md-6">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Your Password" v-model="loginData.password">
            </div>
          </div>
          <button class="btn btn-primary" @click.prevent="login">
            <i class="fa fa-unlock mr-2"></i>Log in
          </button>
        </form>
        <div class="footer text-muted mt-3">
          <small>Formal password policies are not implemented, so please do not choose passwords based upon details
            that may not be as confidential as you'd expect, such as your birth date, your Social Security or phone
            number, or names of family members, or ones that you use for other services such as email, social media,
            etc.</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginData: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      login() {
        if (this.loginData.username && this.loginData.password) {
          this.$store.dispatch('loginAction', this.loginData)
            .then(response => {
              this.$store.dispatch('persistAuthData', response.payload.token );
              this.$router.push('/profile');
            })
            .catch(err => this.setError(err));
        } else {
          this.setError('A username and password is required.');
        }
      },
      setError(error) {
          this.error = error;
        for (let k of Object.keys(this.loginData)) this.loginData[k] = '';
        setTimeout(() => {
          this.error = ''
        }, 5000);
      }
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 4%;
  }
</style>