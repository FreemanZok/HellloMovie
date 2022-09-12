<template>
  <div class="DetaileMovie pt-8">
    <HeaderDetail :myTitle="myTitle" class="mb-10" />
    <BodyDetail :movie_info="movie_info" />
    <router-view></router-view>
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
      my_id: null,
      movie_info: {
      },
      myTitle: null,
      my_token: "f62f750b70a8ef11dad44670cfb6aa57",
    }
  },
  methods: {
    getThisMovie() {
      this.axios.get(`https://api.themoviedb.org/3/movie/${this.my_id} ?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US`).then((response) => {
        console.log("my movie", response.data)
        this.movie_info = response.data;
        this.myTitle = response.data.title
      })
    },
  },
  computed: {
    currentId() {
      let myPath = this.$route.path
      return myPath.split("movie/")[1]
    },
  },
  watch: {
    my_id(newVal) {
      if (newVal) {
        this.getThisMovie();
      }
    },

  },
  created() {

    this.my_id = this.$route.path.split("movie/")[1];

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // react to route changes...
        console.log("toParams", toParams)
        console.log("previousParams", previousParams)
      }
    )
  },
  mounted() {
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