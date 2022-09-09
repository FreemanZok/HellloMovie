
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
                    <h2 class=" mb-6">Hello Title</h2>
                    <div>
                        <p class="font-normal	text-sm mb-1">by</p>
                        <div class="directors">
                            <h3 class="font-semibold	text-sm">Jamse Cameron</h3>
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
    props: ["my_src"],
    computed: {

    },
    methods: {

    }
}
</script>
  

<style lang="scss" scoped>
.title-movie {}

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
    h2{
        color: #b7f9ff;
    }
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
  