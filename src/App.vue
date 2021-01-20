<template>
  <div>
    <!-- <div class="container" v-for="movie in movies" :key="movie">
      <div class="movieContainer">
        {{movie.title}}
        <div class="imgContainer"> 
          <img :src="baseUrl + movie.poster_path"/>
        </div>
      </div>
    </div> -->
    <!-- <img :src="imgSrc" alt="netflix"/> -->
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
// export default {
//   data() {
//     return { 
//       baseUrl: 'https://image.tmdb.org/t/p/w500/',
//       movies: [],
//       imgSrc: 'https://image.tmdb.org/t/p/w500/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg'
//     }
//   },
//   mounted() {
//       axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=965927be031c047f8d9a7fddfe8f08bc&language=en-US&page=1')
//       .then((response) => {
//         this.movies = response.data.results
//         console.log(this.movies)
//     });
//   }
// }
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}
/* .container{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.imgContainer{
  flex-direction: row;
  width: 200px;
  border: 2px solid red;
}
.imgContainer > img{
  width: 100%;
} */
</style>
