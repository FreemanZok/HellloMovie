
<template>
    <div class="BodyDetail">
        <div class="my-container">
            <div class="my-box">
                <div class="poster-wrapper overflow-hidden rounded-lg float-left">
                    <img class="my-img" src="../assets/img/avatar-2.jpg" alt="">
                </div>
                <div class="float-right pl-10 text-left info-movie h-full">
                    <ul class=" h-full gray-box">
                        <li class="w-100 clearfix font-color mb-4">
                            <div class="float-right">
                                $170’000’000
                            </div>
                            <div class="float-left	little-title w-1/3">
                                Budget
                            </div>
                        </li>
                        <li class="w-100 clearfix font-color mb-4">
                            <div class="float-right">
                                $772’776’600
                            </div>
                            <div class="float-left	little-title w-1/3">
                                Revenue
                            </div>
                        </li>
                        <li class="w-100 clearfix font-color mb-4">
                            <div class="float-right">
                                2h 1m
                            </div>
                            <div class="float-left	little-title w-1/3">
                                Runtime
                            </div>
                        </li>
                        <li class="w-100 clearfix font-color mb-4">
                            <div class="float-right">
                                7.9 (23563 votes)
                            </div>
                            <div class="float-left	little-title w-1/3">
                                Score
                            </div>
                        </li>
                        <li class="w-100 clearfix font-color mb-4">
                            <div class="float-right">
                                Action, Science Fiction, Adventure
                            </div>
                            <div class="float-left	little-title w-1/3">
                                Genres
                            </div>
                        </li>
                        <li class="w-100 clearfix font-color mb-4">
                            <div class="float-right">
                                <a href="">link</a>
                            </div>
                            <div class="float-left	little-title w-1/3">
                                IMDB Link
                            </div>
                        </li>
                        <li class="w-100 clearfix font-color mb-4">
                            <div class="float-right">
                                <a href="">link</a>
                            </div>
                            <div class="float-left	little-title w-1/3">
                                Homepage Link
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-6 text-left">
                <p class="font-color text-md	">
                    Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of
                    a
                    manhunt after discovering an orb wanted by Ronan the Accuser. Light years from Earth, 26 years after
                    being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb
                    wanted
                    by Ronan the Accuser. Light years from Earth, 26 years after being abducted, Peter Quill finds
                    himself
                    the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.
                </p>
                <div class="mt-4 mb-10">
                    <div class="text-lg font-color font-semibold">
                        Credit:
                    </div>
                    <div class="text-md font-color">
                        Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace , Zoe Saldanna , Vin Diesel
                        , Chris Pratt , Bradley Cooper , Lee Pace and 19 more.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'BodyDetail',
    props:["movie_info"],
    data() {
        return {}
    },
    methods: {},
    computed: {},
    mounted: {}
}
</script>
  

<style lang="scss" scoped>
.my-box {
    height: 394px;
}

.little-title {
    color: #636363;
    font-weight: 600;
    font-size: 16px;
}

.gray-box {
    background: #e8e8e8;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 0 4px #a0a0a0;
}

.BodyDetail {
    .poster-wrapper {
        width: 304px;
        height: 395px;
        box-shadow: 0 0 4px #a0a0a0;

        .my-img {
            width: 100%;
            height: 100%;
        }
    }
}

.info-movie {
    width: calc(100% - 320px);
}
</style>
  