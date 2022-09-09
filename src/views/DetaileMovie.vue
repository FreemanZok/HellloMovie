<template>
  <div class="DetaileMovie">
    <HeaderDetail />
  </div>
</template>
<script>
  import HeaderDetail from "../components/HeaderDetail.vue"
  export default {
  name: 'Home',
  components: {
    HeaderDetail,
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