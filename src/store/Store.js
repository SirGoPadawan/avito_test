import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async getRepositories(ctx, limit = 10, getRepositoriesByName) {
      const res = await fetch(
        "https://api.github.com/search/repositories?q=" +
          getRepositoriesByName +
          "&sort=stars&per_page=" +
          limit
      );

      const repositories = await res.json();
      ctx.commit("updateRepositories", repositories);
    },
  },
  state: {
    repositories: [],
  },
  mutations: {
    updateRepositories(state, repositories) {
      state.repositories = repositories;
    },
  },
  getters: {
    allRepositories(state) {
      return state.repositories;
    },
  },
});
