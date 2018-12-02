<template>
  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          {{ coin.name }}
          <span :class="isOverLimit ? 'text-danger' : 'text-success'">&nbsp;&bull;</span>
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ coin.description }}
        </h6>
        <small class="text-muted"><i class="fa fa-clock-o mr-1"></i>
          Created {{ moment(coin.createdAt).from(moment()) }}
          <i class="fa fa-line-chart ml-2 mr-1"></i>
          <span v-if="isOverLimit">Over limit at {{ usePercentage }}%</span>
          <span v-else>Under/ at limit at {{ usePercentage }}%</span>
        </small>
        <button class="btn btn-outline-warning btn-sm mt-3" @click.prevent="editCoin">
          <i class="fa fa-edit mr-2"></i>Edit Coin
        </button>
      </div>
      <!-- <div class="card-footer">
      </div> -->
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
    props: ['coin'],
    data() {
      return {
        moment
      }
    },
    methods: {
      editCoin() {
        this.$router.push('/coin/' + this.coin._id);
      }
    },
    computed: {
      isOverLimit() {
        return this.coin.amount < this.coin.expenses.reduce((acc, val) => acc.amount + val.amount);
      },
      usePercentage() {
        return Math.round((this.coin.expenses.reduce((acc, val) => acc.amount + val.amount) / this.coin.amount) * 100);
      }
    }
}
</script>

<style>

</style>
