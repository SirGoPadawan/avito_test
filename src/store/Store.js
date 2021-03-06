import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async getRepositories(ctx, { name, page }) {
      console.info(name, page);
      name = name === "" ? "stars:>0" : name;
      const res = await fetch(
        "https://api.github.com/search/repositories?q=" +
          name +
          "+in:name&sort=stars&page=" +
          page +
          "&per_page=10"
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
    getPageCount(state) {
      return state.repositories.total_count === undefined
        ? 0
        : Math.ceil(state.repositories.total_count / 10);
    },
  },
});
