<script>
    export default {
        name: 'AppHeader'
    }
</script>

<template>
    <header>
        <nav class="row">
            <div class="col-2 logo">BOOLFLIX</div>
            <div class="col-3 search-name">
                <input type="search">
                <button>VIA</button>
            </div>
        </nav>
    </header>


</template>

<style lang="scss" scoped>
    nav, div {
        border: solid black 0.1rem;
         div {
            height: 100px;
         }
    }
    .row {
        width: 100vw;
        padding: 0 2rem 0;
        display: flex;
        justify-content: space-between;
        background-color: black;
        color: red;
        .logo {
            font-size: 3rem;
        }
        .search-name {
            padding: 0;
            display: flex;
            align-items: center;
            input {
                width: 70%;
                margin-right:5% ;
                padding-left: 0.3rem;
                height: 2rem;
            }
            button {
                width: 25%;
                border-style: none;
                border-radius: 3px;
                background-color: white;
                height: 2rem;
            }
        }
    }


</style>