<script>
import axios from 'axios';
import AppHeader from './component/AppHeader.vue';
import AppMain from './component/AppMain.vue';
export default {
        name: 'App',
        components: {
            AppHeader,
            AppMain,
        }
    }
</script>

<template>
    <AppHeader/>
    <AppMain/>
</template>

<style>


</style>
