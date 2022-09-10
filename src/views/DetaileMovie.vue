<template>
  <div class="DetaileMovie pt-8">
    <HeaderDetail class="mb-10"/>
    <BodyDetail/>
  </div>
</template>
<script>
import HeaderDetail from "../components/HeaderDetail.vue"
import BodyDetail from "../components/BodyDetail.vue"
export default {
  name: 'Home',
  components: {
    HeaderDetail,
    BodyDetail
  },
  data() {
    return {
      movie_info: "61n-olilSdL._AC_SY679_.jpg",
      my_token:"f62f750b70a8ef11dad44670cfb6aa57"
    }
  },
  methods: {
    // getList() {
    //   this.axios.get("https://randomuser.me/api/?results=50&seed=1df71d3e5568067e").then((response) => {
    //     console.log(response.data)
    //   })
    // },
    getList() {
      this.axios.get("https://api.themoviedb.org/3/certification/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57").then((response) => {
        console.log("fuckin alizoka",response.data)
      })
    },

    getApi_2() {
      this.axios.get("https://api.themoviedb.org/3/movie/{movie_id}?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US").then((response) => {
        console.log("fuckin alizoka",response.data)
      })
    },
  },
  mounted() {
    // this.getApi_1()
  }
}
</script>

<!-- https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate -->
<!-- https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US -->
<!-- https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US -->
<!-- https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US -->



<!-- https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png -->
<!-- https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png -->
<!-- https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg -->