<template>
    <div>
        <header class="nav-bar">
            <navBar @toggle-nav-bar="showStatus"></navBar>
        </header>
        <additional-filter v-show="isAdditionalPanelShown" style="display: block;"></additional-filter>
        <div class="side-bar-categories">
            <ul>
                <li id="category">Categories</li>
                <li class="movie-genres" v-for="genre in genres" :key="genre" @click="filterByCat(genre.id)">
                    <span> > </span> {{genre.name}}
                </li>
            </ul>
        </div>
        <section class="movie-section">
            <ul>
                <!-- <div class="hover-info" >
                    <p id="hover-info-title">{{test.original_title}}</p>
                    <h1>{{test.original_title}}</h1>
                    <p id="hover-info-overview">{{test.overview}}</p>
                </div> -->
                <movieCard  v-for="movie in movies" :key="movie" :movie="movie">
                </movieCard>
            </ul>
        </section>
    </div>
</template>

<script>
import additionalFilter from './additional-filters'
import navBar from './nav-bar'
import axios from 'axios'
import urls from '../api/urls'
import movieCard from './movie-card'
export default {
    components:{
        navBar,
        additionalFilter,
        movieCard
    },
    data() {
        return { 
            genres: [],
            movies: [],
            isAdditionalPanelShown: false,
        }
    },
    mounted() {
    axios
        .get(
            urls.genres
        )
        .then((response) => {
        this.genres = response.data.genres
        // console.log(this.genres)
        });
    axios
        .get(
            urls.movie_list
        )
        .then((response) => {
        this.movies = response.data.items
        console.log(this.movies)
        });
    // axios
    //     .get(
    //         'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US'
    //     )
    //     .then((response) => {
    //     this.movies = response.data.items
    //     console.log(this.movies)
    //     });
        //965927be031c047f8d9a7fddfe8f08bc
  },
  methods: {
      filterByCat(catId) {
        axios
            .get(
                urls.filterByCategory(catId)
            )
            .then((response) => {
            this.movies = response.data.results
            });
      },
      showStatus(value){
        this.isAdditionalPanelShown = value;
      }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
.test{
    background-color: white;
}
#hover-info-title{
    color: white;
    opacity: 1;
    display: block;
}
#hover-info-overview{
    color:white;
    border: 2px solid white;
    position: absolute;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    opacity: 1;
    display: block;
}
.hover-info{
    background-color: black;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 500px;
    opacity: 0.7;
    display: none;
    
}
.side-bar-categories{
    width: 15%;
    padding-left: 5px;
    float: left;
}
.side-bar-categories ul{
    list-style-type: none;
}
.side-bar-categories ul li{
     padding: 20px;
    font-size: 20px;
    width: 100%;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
}
.side-bar-categories ul li span {
    font-weight: 100;
    color: gray;
}
.movie-genres:hover{
    background-color: rgb(207, 207, 207);
    cursor: pointer;
    border-left: 5px solid rgb(0, 153, 255);
    color: rgb(0, 153, 255);
}
#category{
    padding: 20px;
    background-color: #319ce7;
    color: white;
    border-radius: 5px;
}
/* MOVIE SECTION */
.movie-section{
    float: left;
    width: 75%; 
    /* margin-left: 20px; */
}
.movie-section ul{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    row-gap: 20px;
    flex-flow: wrap;
}
</style>