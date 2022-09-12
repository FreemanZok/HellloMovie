import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DetaileMovie from "../views/DetaileMovie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/detaile-movie/:id",
    name: "DetaileMovie",
    component: DetaileMovie,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
