import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import TheIndex from "./components/pages/TheIndex.vue";
import TheAboutRep from "./components/pages/TheAboutRep.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: TheIndex,
    },
    {
      path: "/page/:page",
      component: TheIndex,
    },
    {
      path: "/the-about-rep",
      component: TheAboutRep,
    },
  ],
});

export default router;
