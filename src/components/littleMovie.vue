
<template>
    <div class="littleMovie">
        <div class="my-card my-curve my-container ">
            <div class="background my-wrapper go-left clearfix movie-card">
                <div class="left-card">
                    <div class="img-wrapper">
                        <img :src='require(`@/assets/img/${my_src}`)' alt="">
                    </div>
                </div>
                <div class="title-movie right-card pl-3 pt-2 font-semibold">
                    <h2 class=" mb-6 text-sky-700	">Hello Title</h2>

                    <div class="mb-2">
                        <p class="font-normal my-small">by</p>
                        <div class="directors">
                            <h4 class="font-semibold text-sm">Jamse Cameron</h4>
                        </div>
                    </div>
                    <div class="text-xs font-normal mb-2">
                        <font-awesome-icon icon="calendar"></font-awesome-icon>
                        <span class="pl-3">2022.10.12</span>
                    </div>
                    <div>
                        <ul class="genre-list text-xs font-normal">
                            <li class="inline-block mr-2">Sci-Fi</li>
                            <li class="inline-block mr-2">Drama</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'littleMovie',
    props: ["my_src"],
    computed: {

    },
    methods: {

    }
}
</script>
  

<style lang="scss" scoped>
.title-movie {}

.genre-list {
    color:rgb(178 151 15);
    font-weight: 600;
    li::before {
        content: "•";
        font-weight: bold;
        display: inline-block;
        width: 6px;
        margin-left: 0px;
    }
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

.movie-card:hover {
    box-shadow: 2px 2px 4px #b1c6e5 !important;
    cursor: pointer;

    h2 {
        color: #48b2ec  ;
    }
}
.my-small{
    font-size: 11px;
}
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.img-wrapper {
    overflow: hidden;
    height: 170px;
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

.my-container {
    max-width: 1024px;
    margin: 0 auto;
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
  