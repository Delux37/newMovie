<template>
    <div class="side-bar-categories">
        <ul>
            <!-- <li id="category">Categories</li> -->
            <li class="movie-genres">
                <span> > </span> {{name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style scoped>
.side-bar-categories{
    border: 1px solid gray;
    width: 15%;
    padding-left: 5px;
    float: left;
}
.side-bar-categories ul{
    list-style-type: none;
}
.side-bar-categories ul li{
    /* margin-top: 20px; */
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
</style>