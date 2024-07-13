<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './component/AppHeader.vue';
import AppMain from './component/AppMain.vue';
export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        getMovie(){
            axios.
            get(store.apiURL)
            .then(ritorna=>{
                console.log(ritorna);
                store.filmList= ritorna;
            })
        }
    },
    created(){
        this.getMovie();
    }
}
</script>

<template>
    <AppHeader/>
    <AppMain/>
</template>

<style lang="scss">
    @use './style/generale.scss' as *;

</style>
