<template>
  <div class="home my-container">
    <HeaderHome class="go-bottom" />
    <div class="home-body">
      <div v-for="bab in 9" :key="bab" class="box-part">
        <router-link to="/detaile-movie">
           <littleMovie :my_src="my_src" />
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
  data(){
    return{
      my_src:"61n-olilSdL._AC_SY679_.jpg"
    }
  },
  methods:{
    getList() {
      this.axios.get("https://randomuser.me/api/?results=50&seed=1df71d3e5568067e").then((response) => {
        console.log(response.data)
      })
    }
  },
  mounted(){
    this.getList();
  }
}
</script>
<style lang="scss" scoped>
.home-body{
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
