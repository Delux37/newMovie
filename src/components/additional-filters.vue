<template>
    <div class="header-aditional-panel" style="height: 500px; display: block;">
            <section class="additional-panel-section">
                <div class="additional-panel-search-movie">
                    <input type="text" placeholder="Search for movie"/>
                    <span><ion-icon name="search-outline"></ion-icon></span>
                </div>
                <div class="additional-panel-filter-movie">
                    <div id="left-panel">
                        <p>Film search</p>
                        <div class="form-group">
                            <label for="filter-dasaxeleba">Film name</label>
                            <input type="text" placeholder="Film name" id="filter-dasaxeleba"/>
                        </div>
                        <div class="form-group">
                            <label for="filter-janri">Genre</label>
                            <select name="filte-janri">
                                <option></option>
                                <option v-for="genre in genres" :key="genre">{{ genre.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <div class="filter-weli">
                                <label for="filter-weli-dan">Year from</label>
                                <input type="text" placeholder="from"/>
                            </div>
                            <div class="filter-weli">
                                <label for="filter-weli-mde">Year till</label>
                                <input type="text" placeholder="till"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="filter-rolebshi">Starring</label>
                            <input type="text" placeholder="starring"/>
                        </div>
                       <div class="form-group">
                            <label for="filter-rejisori">Producer</label>
                            <input type="text" placeholder="Producer"/>
                        </div>
                    </div>
                    <div id="right-panel">
                        <p>Actor search</p>
                        <div class="form-group">
                            <label for="filter-name">Name</label>
                            <input type="text" placeholder="Name" id="filter-name"/>
                        </div>
                        <div class="form-group">
                            <div class="filter-weli filter-weli-left">
                                <label for="filter-dab-weli-dan">born year from</label>
                                <input type="text" placeholder="from" id="filter-dab-weli-dan"/>
                            </div>
                            <div class="filter-weli filter-weli-right">
                                <label for="filter-dab-weli-mde">born year till</label>
                                <input type="text" placeholder="till" id="filter-dab-weli-mde"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="filter-dab-adgili">born place</label>
                            <input type="text" placeholder="born place" id="filter-dab-adgili"/>
                        </div>
                       <div class="form-group">
                            <label for="filter-filmi">movie played in</label>
                            <input type="text" placeholder="movie played in" id="filter-filmi"/>
                        </div>
                         <div class="form-group">
                            <button class="submit-btn">Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.additional-panel-section{
    width: 70%;
    margin: 0 auto;
    margin-top: 15px; 
}
.additional-panel-search-movie input{
    /* display: inline; */
    /* float: left; */
    width: 90%;
    height: 40px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.additional-panel-search-movie input:focus{
    outline-color: hsla(89, 43%, 51%, 0.3);
}
.additional-panel-search-movie {
    overflow: hidden;
}
.additional-panel-search-movie span{
    font-size: 14px;
    padding: 11px 16px;
    padding-top: 5px;
    background-color: #0e75be;
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-left: 15px;
    border-radius: 14px;
}
#left-panel{
    width: 45%;
    float: left;
    margin: 15px;
}
#right-panel{
    width: 45%;
    float: right;
    margin: 15px;
}
.form-group{
    margin: 15px auto;
}
.form-group > label{
    display: block;
    font-weight: bold;
}
.form-group > select {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
}
.form-group > input:focus{
    outline-color: hsla(194, 85%, 55%, 0.3);
}
.filter-weli > input:focus{
    outline-color: hsla(194, 85%, 55%, 0.3);
}
.form-group > select:focus{
    outline-color: hsla(194, 85%, 55%, 0.3);
}
.form-group > input{
    width: 100%;
    height: 40px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.filter-weli{
    float: left;
    width: 50%;
    margin-bottom: 15px;
}
p{
    font-weight: 100;
    opacity: 0.7;
}
.filter-weli label{
    font-weight: bold;
}
.filter-weli input{
   height: 40px;
   padding: 6px 12px;
   font-size: 14px;

    height: 40px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.submit-btn{
    background: #319ce7;
    color: #FFFFFF;
    border: none;
    height: 45px;
    line-height: 38px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin-top: 15px;
}
.submit-btn:hover{
    background: #0e75be;
    cursor: pointer;
}

</style>