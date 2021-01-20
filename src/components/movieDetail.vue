<template>
    <div>
        <div class="background" :style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + image + movie.backdrop_path + ')' }">
        </div>
        <div class="content">
            <div class="poster-container left-side">
                <img :src="image+movie.poster_path"/>
            </div>
            <div class="content-container left-side">
                <p>
                    {{movie.release_date}}
                </p>
                <p>
                    {{movie.original_title}}
                </p>
                <div class="imdb-badge">
                    <img src="../img/des.jpg"> {{movie.vote_average}}
                </div>
                <ul>
                    <li v-for="genre in movie.genres" :key="genre">
                        {{genre.name}}
                    </li>
                </ul>
                <p>
                    language: {{movie.language}}
                    budget: {{movie.budget}} $
                </p>
                <div class="film-overview">
                    <h1> Film Overview</h1>
                    <hr>
                    {{movie.overview}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import urls from '../api/urls'
export default {

    //released_date
    //noriginal_title
    //vote_average
    //genres [array]
    
    //overview

    //poster_path
    //backdro_path
    //budget

    //language
    //original_title
 
   
    //
    name: 'movieDetail',
    data() {
        return{
            movie: {},
            image: 'https://image.tmdb.org/t/p/w500/',
            linear: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),'
        }
    },
        mounted() {   
            axios
                .get(
                    urls.getDetail(this.$route.params.id)
                )
                .then((response) => {
                this.movie = response.data
                console.log(this.movie)
                }); 
    },
}
</script>

<style scoped>
h1{
    font-size: 23px;
}
.film-overview{
    padding: 10px;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    background-color: rgb(235, 235, 235);
    width: 90%;
    margin: 20px auto;
}
.imdb-badge{
    width: 8%;
    display: flex;
    flex-direction: row;
    padding: 10px;
}
.imdb-badge img{
    width: 100%;
    margin-right: 10px;
}
.content-container{
    display: flex;
    flex-direction: column;
    width: 80%;
    font-weight: bold;
}
.content-container ul li {
    display:inline-block;
    list-style-type:none;
    padding: 10px;
}
p{
    padding: 10px;
}
.left-side{
    float: left;
}
.poster-container{
    width: 20%;
}
.poster-container img{
    width: 100%;    
}
.content{
    position: absolute;
    width: 80%;
    height: 70%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    background-color: rgb(218, 218, 218);
    border: 2px solid rgb(185, 185, 185);
    border-radius: 5px;
}
.background {
    background-size: cover;
    background-position: center;
    height: 50vh;
}
</style>