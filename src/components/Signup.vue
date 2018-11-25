<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <h3>Signup</h3>
        <hr>
        <form>
          <transition name="fade" mode="out-in">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
          </transition>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" placeholder="Your Email" v-model="signupData.username">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" placeholder="Your Password"  v-model="signupData.password">
            </div>
          </div>
          <button class="btn btn-primary" @click.prevent="signup">
            <i class="fa fa-user-plus mr-2"></i>Sign up
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
        signupData: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      signup() {
        if (this.signupData.username && this.signupData.password) {
          this.$store.dispatch('signupAction', this.signupData)
            .then(response => this.$router.push('/login'))
            .catch(err => this.setError(err));
        } else {
          this.setError('A username and password is required.');
        }
      },
      setError(error) {
        this.error = error;
        for (let k of Object.keys(this.signupData)) this.signupData[k] = '';
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