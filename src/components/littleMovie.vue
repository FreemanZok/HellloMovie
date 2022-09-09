
<template>
    <div class="littleMovie">
        <div class="my-card my-curve my-container ">
            <div class="background my-wrapper go-left clearfix">
                <div class="left-card">
                    <div class="img-wrapper">
                        <img :src='require(`@/assets/img/${my_src}`)' alt="">
                    </div>
                </div>
                <div class="right-card pl-1 pt-2 font-semibold">
                    hello TITLE
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
    methods:{
        
    }
}
</script>
  

<style lang="scss" scoped>
.clearfix {
    overflow: auto;
}
.right-card{
    float: right;
    text-align: left;
    width: 57%;
    height: 100%;
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
  