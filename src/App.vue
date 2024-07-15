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
            // riferimento catalogo film
            let catalogoFilm = store.apiURL;
            // aggiunta del filtro di ricerca per titolo
            if(store.filmSearch!== '') {
                catalogoFilm += `&${store.apiParametroricerca}=${store.filmSearch}`;
            }
            axios
            .get(catalogoFilm)
            .then(ritorna=>{
                console.log(ritorna.data.results);
                store.filmList = ritorna.data.results;
            })
        }
    },

    created(){
        this.getMovie();
    }
}
</script>

<template>
    <AppHeader @ricerca="getMovie"/>
    <main>
        <AppMain/>
    </main>
</template>

<style lang="scss">
    @use './style/generale.scss' as *;

</style>
