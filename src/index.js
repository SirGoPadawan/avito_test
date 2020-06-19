"use strict";
import "./css/style.css";
import Vue from "vue";
import router from "./Router";
import App from "./App.vue";
import Store from "./store/Store";

new Vue({
  el: "#app",
  router,
  Store,
  render: (h) => h(App),
});
