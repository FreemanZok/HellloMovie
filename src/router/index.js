import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/detaile-movie",
    name: "DetaileMovie",
    component: () => import("../views/DetaileMovie.vue"),
    children: [
      {
        path: ":id",
        component: () => import("../views/DetaileMovie.vue"),
      },
      
    ],
  },

];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
