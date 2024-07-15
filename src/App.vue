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
                console.log(ritorna.data.results);
                store.filmList= ritorna.data.results;
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
    <main>
        <AppMain/>
    </main>
</template>

<style lang="scss">
    @use './style/generale.scss' as *;

</style>
