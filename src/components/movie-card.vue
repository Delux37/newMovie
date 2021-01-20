<template>
    <div class="movie">
        <div class="img-div">
            <router-link :to="{name: 'movieDetail', params:{id: movie.id}}"><img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" >
            </router-link>
        </div>
        <div class="movie-title-year">
            {{movie.title}}
        </div>
        <div class="movie-title-year">
            {{movie.release_date.substring(0,4)}}
        </div>    
    </div>
</template>

<script>
export default {
    // name: movieCard,
    props: ['movie']
}
</script>

<style scoped>
.movie-title-year{
    color: rgb(179, 179, 179);
    margin-top: 3px;
}

.movie{
    /* border: 2px solid black; */
    border-radius: 5px;
    width: 25%;
}
.img-div{
    width: 100%;
}
.img-div  img{
    border-radius: 5px;
    width: 100%;
}
</style>