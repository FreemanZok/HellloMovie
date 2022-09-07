<template>
  <div class="home my-container">
    <HeaderSearch class="go-bottom" />
    <div class="home-body">
      <div v-for="bab in 9" :key="bab" class="box-part">
        <littleMovie :my_src="my_src" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "../components/HeaderSearch.vue"
import littleMovie from "../components/littleMovie.vue"
export default {
  name: 'Home',
  components: {
    HeaderSearch,
    littleMovie,
  },
  data(){
    return{
      my_src:"61n-olilSdL._AC_SY679_.jpg"
    }
  }
}
</script>
<style lang="scss" scoped>
.home-body{
  margin: 0 -22px;
}
.clearfix {
  overflow: auto;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.my-container {
  max-width: 1024px;
  margin: 0 auto;
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
