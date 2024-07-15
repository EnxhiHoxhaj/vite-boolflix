<script>
    import { info } from 'sass';
    export default {
        name: 'SingleProduct',
        props: ['info'],

    }
</script>
np
<template>
    <div class="col-2 movie-card">
        <div class="flip-card">
            <div class="poster">
                <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`">
                <h3>{{info.title}}</h3>
            </div>
            <div class="movie-info">
                <div class="title">
                    <strong>Titolo:</strong>
                    <div>{{info.title}}</div>
                </div>
                <div class="orig-title">
                    <strong>Titolo originale:</strong>
                    <div>{{ info.original_title }}</div>
                </div>
                <div class="voto">
                    <strong>Voto:</strong>
                    <div></div>
                </div>
                <div class="plot">
                    <strong>Overview:</strong>
                    <div> {{ info.overview }}</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .movie-card {
        width: calc(100vw / 6 - 3rem);
        color: white;
        padding: 0;
        position: relative;
        perspective: 1000px;
        margin-bottom: 2rem;

        .flip-card {
            position: absolute;
            width: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
            img {
                width: 100%;
                margin-bottom: 0.5rem;
            }
        }
        &:hover .flip-card {
            transform: rotateY(-180deg);
        }

        .poster, .movie-info {
            width: 100%;
            height: 25rem;
            position: absolute;
            backface-visibility: hidden;
            background-color: #1b1b1b;
            border: solid white 0.01px;
        }
        .movie-info {
            transform: rotateY(180deg);
            padding: 0.7rem;
         }

    }

</style>