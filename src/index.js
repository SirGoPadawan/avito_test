"use strict";
import "./css/style.css";
import Vue from "vue";
import Vuex from "vuex";
import router from "./Router";
import App from "./App.vue";
import store from "./store/Store";

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
