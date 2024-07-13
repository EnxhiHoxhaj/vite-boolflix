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
    <main>
        <div class="row" v-for="movie in store.filmList">
            <SingleProduct/>
        </div>
    </main>


</template>

<style lang="scss" scoped>
    .row {
        background-color: #1b1b1b;
        height:auto;
        width: 100vw;
        padding: 2rem;
        gap: 1rem;
        min-height: 50rem;
    }

</style>