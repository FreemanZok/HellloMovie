
<template>
    <div class="littleMovie">
        <div class="my-card my-curve my-container ">
            <div class="background my-wrapper go-left clearfix movie-card">
                <div class="left-card">
                    <div class="img-wrapper">
                        <!-- <img :src='movie_info.poster_path' alt="" > -->
                    </div>
                </div>
                <div class="title-movie right-card pl-3 pt-2 font-semibold ">
                    <!-- <h2 class=" mb-4 font-color mt-4">{{movie_info.title}}</h2> -->
                    <div class="text-xs font-normal mb-2 go-bottom">
                        <div class="mb-2">
                            <div class="pb-2 inline-block">
                                <font-awesome-icon icon="star"></font-awesome-icon>
                            </div>
                            <!-- <span class="ml-1 inline-block">{{movie_info.vote_average}}</span> -->
                        </div>
                        <div class="genres mb-2">
                            <ul class="genre-list text-xs font-normal">
                                <li class="inline-block mr-2">Sci-Fi</li>
                                <li class="inline-block mr-2">Drama</li>
                            </ul>
                        </div>
                        <div>
                            <font-awesome-icon icon="calendar"></font-awesome-icon>
                            <!-- <span class="pl-3">{{movie_info.release_date}}</span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'littleMovie',
    // props: {movie_info: Object},
    data() {},
    computed: {},
    methods: {},
    mounted() {}
}
</script>
  

<style lang="scss" scoped>
.title-movie {}

.genre-list {
    color: rgb(178 151 15);
    font-weight: 600;

    li::before {
        content: "•";
        font-weight: bold;
        display: inline-block;
        width: 6px;
        margin-left: 0px;
    }
}

.go-bottom {
    position: absolute;
    bottom: 10px;
}
.clearfix {
    overflow: auto;
}
.right-card {
    float: right;
    text-align: left;
    width: 57%;
    height: 100%;
}
.movie-card {
    height: 195px;
    position: relative;
}
.movie-card:hover {

    box-shadow: 2px 2px 4px #989898 !important;
    cursor: pointer;
    transition: .3s;

    h2 {
        color: #082ea1;
    }
}

.my-small {
    font-size: 11px;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.img-wrapper {
    overflow: hidden;
    height: 195px;
    max-width: 130px;

}


.left-card {
    float: left;
    width: 43%;

    img {
        width: 100%;
        height: 100%;
    }
}

.littleMovie {
    .go-left {
        text-align: left;
    }

    .my-card {
        color: #767676;
        min-height: 30px;
        padding: 8px 20px;

        &.my-curve {
            border-radius: 10px;
        }
    }
}
.my-wrapper {
    // padding: 17px 25px;
    box-shadow: 0 0 4px #a0a0a0;
    border-radius: 17px;
    background: #e8e8e8;

}

.background {
    background: #e8e8e8;
}
</style>
  