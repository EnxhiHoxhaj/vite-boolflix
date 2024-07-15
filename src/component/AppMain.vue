<script>
import SingleProduct from './SingleProduct.vue';
import { store } from '../store';
import { info } from 'sass';
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
            <div class="col movie-cont" v-for="movie in store.filmList" :key="movie.id">
                <SingleProduct :info="movie" />
            </div>
        </div>


</template>

<style lang="scss" scoped>
    .row {
        background-color: #1b1b1b;
        padding: 2rem;
        gap: 1rem;
        min-height: 1650px;
        .movie-cont {
            width: fit-content;
            height: fit-content;
        }
    }

</style>