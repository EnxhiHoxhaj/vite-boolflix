<script>
import SingleProduct from './SingleProduct.vue';
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        SingleProduct,
    },
    data(){
        return{
            store,
        }
    }

}
</script>

<template>
        <div class="row">
            <div class="col movie-con" v-for="movie in store.filmList">
                <SingleProduct />
            </div>
        </div>


</template>

<style lang="scss" scoped>
    .row {
        background-color: #1b1b1b;
        width: 100vw;
        padding: 2rem;
        gap: 1rem;
        min-height: 1650px;
 
    }

</style>