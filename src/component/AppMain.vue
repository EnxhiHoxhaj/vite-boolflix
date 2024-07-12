<script>
import SingleProduct from './SingleProduct.vue';
    export default {
        name: 'AppMain',
        components: {
            SingleProduct
        }
    }
</script>

<template>
    <main>
        <div class="row">
            <SingleProduct />
        </div>
    </main>


</template>

<style lang="scss" scoped>
    .row {
        background-color: #1b1b1b;
        min-height: 800px;
    }

</style>