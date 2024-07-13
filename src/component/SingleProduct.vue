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
                <img src="https://m.media-amazon.com/images/I/81kz06oSUeL._AC_SL1500_.jpg" alt="movie poster">
                <h3>TITOLO</h3>
            </div>
            <div class="movie-info">
                <div class="title">
                    <strong>Titolo:</strong>
                    <span>Nome film</span>
                </div>
                <div class="orig-title">
                    <strong>Titolo originale:</strong>
                    <span></span>
                </div>
                <div class="voto">
                    <strong>Voto:</strong>
                    <span></span>
                </div>
                <div class="plot">
                    <strong>Overview:</strong>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique asperiores eligendi, ipsum nesciunt vitae modi atque sed nemo, beatae dolores perspiciatis animi ea! Dolores dolor molestias ipsa optio. Ducimus!</span>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
    .movie-card {
        height: fit-content;
        color: white;
        padding: 0;
        position: relative;
        perspective: 1000px;

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
            position: absolute;
            backface-visibility: hidden;
            height: 410px;
            background-color: #1b1b1b;
            border: solid white 0.01px;
        }
        .movie-info {
            transform: rotateY(180deg);
            padding: 0.7rem;
         }

    }

</style>