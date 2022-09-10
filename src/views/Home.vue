<template>
  <div class="home my-container pt-8">
    <HeaderHome class="go-bottom" />
    <div class="home-body">
      <div v-for="bab in my_list" :key="bab" class="box-part">
        <router-link to="/detaile-movie">
          <littleMovie :movie_info="movie_info" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHome from "../components/HeaderHome.vue"
import littleMovie from "../components/littleMovie.vue"
export default {
  name: 'Home',
  components: {
    HeaderHome,
    littleMovie,
  },
  data() {
    return {
      movie_info: "61n-olilSdL._AC_SY679_.jpg",
      my_token: "f62f750b70a8ef11dad44670cfb6aa57",
      my_list:null,
    }
  },
  methods: {
    getList() {
      this.axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + this.my_token + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate").then((response) => {
        console.log("fuckin alizoka", response.data)
        this.my_list=response.data.results

      })
    },
  },
  mounted() {
    this.getList();
  }
}
</script>
<style lang="scss" scoped>
.home-body {
  margin: 0 -22px;
}

.my-flex {
  display: flex;
}

.go-bottom {
  margin-bottom: 20px;
}

.box-part {
  width: calc(100% /3);
  float: left;
}
</style>
