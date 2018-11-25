<template>
    <div class="container">
        <div class="row">
            <app-card v-for="coin of coins" :key="coin.id" :coin="coin" />
        </div>
    </div>
</template>

<script>
import Card from './Card';

export default {
    components: {
        'app-card': Card
    },
    props: ['coins']
}
</script>

<style scoped>

</style>
