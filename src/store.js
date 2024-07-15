import { reactive } from "vue"

export const store = reactive({
    filmList: [],
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=62ec7c8a7a3ad036cf321a05496ab7b0&query=avengers&media_type=movie',
    filmSearch: '',
    apiParametroricerca: "title",
});