
<template>
    <div class="HeaderDetail">
        <div class="my-card my-curve my-container">
            <div class="background my-wrapper go-right clearfix">
                <div class="inner ">
                    <button @click="goHome()" class="my-button"> Back !</button>
                </div>
                <div class="title-page float-left">
                    <h1 class="text-sky-600	text-2xl my-blue mt-2">Guardians of the Galaxy</h1>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HeaderDetail',
    props: {
        msg: String
    },
    methods: {
        goHome(){
            this.$router.push("/")
        }  
    },
}
</script>
  

<style lang="scss" scoped>
.HeaderDetail {
    .go-right {
        text-align: right;
    }

    .my-card {
        box-shadow: 0 0 4px #a0a0a0;
        min-height: 30px;
        background: #e8e8e8;

        &.my-curve {
            border-radius: 10px;
        }
    }

    .inner {

        display: inline-block;
    }
}



.input-wrapper {
    margin-right: 10px;
}

.my-button {
    background: white;
    border: none !important;
    padding: 10px 20px;
    border-radius: 20px;
    color: #5396ff;
    font-weight: 600;
    cursor: pointer;
    transition: .2s;

    &:hover {
        box-shadow: 0 0 5px grey;
        color: #3478e3;
    }
}

.my-wrapper {
    padding: 17px 25px;
}

.my-input {
    min-height: 44px;
    border-radius: 20px;
    outline: none !important;
    border: none;
    padding: 2px 20px;
    transition: 0.2s;
    min-width: 240px;

    &:focus {
        box-shadow: 0 0 5px gray;
    }
}

.m-right-1 {
    margin-right: 10px;
}

.gray {
    color: gray;
}
</style>
  