<template>
        <header class="nav-bar">
            <div class="section">
                <h1>NewMovies</h1>
                <div class="icon-div">
                    <ion-icon id="login" name="person-outline"></ion-icon>
                </div>
                <div class="icon-div" @click="toggleNavBar">
                    <ion-icon id="search" name="search-outline"></ion-icon>
                </div>
            </div>
        </header>
</template>

<script>
export default {
   data() {
       return {
           isShown: false
       }
   },
   methods: {
       toggleNavBar() {
           this.isShown = !this.isShown;
           this.$emit('toggle-nav-bar', this.isShown)
       }
   }
}
</script>

<style scoped>
.nav-bar{
    border-top: 4px solid  #319ce7;
    width: 100%;
    min-height: 10vh;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
   
}
.section > h1{
    color: #319ce7;
    font-weight: bold;
    padding: 0;
    margin-right: 330px;
}
.icon-div{
    display: flex;
    align-items: center;
    height: 100%;
    width: 30%;
    justify-content: center;
}
.icon-div:hover{
    cursor: pointer;
    background-color: gray;
}
#login{
    color:#319ce7;
    font-weight: bold;
    font-size: 30px;
}
#search{
    color:#319ce7;
    font-weight: bold;
    font-size: 30px;
}
.section{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>