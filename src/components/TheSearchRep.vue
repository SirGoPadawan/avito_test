<template>
  <section class="main__items">
    <form action="" class="placeholder">
      <input
        type="text"
        class="placeholder__input"
        placeholder="Name repository"
        :value="name"
      />
      <button @click="getRepositoriesByName(name)" class="btn-search">
        Search
      </button>
    </form>
    <article class="repo" v-for="repo in allRepositories.items" :key="repo.id">
      <h4>
        <router-link to="/the-about-rep" class="search__name-user">{{
          repo.name
        }}</router-link>
      </h4>
      <p class="text">Stars: {{ repo.stargazers_count }}</p>
      <p class="text">Last commit {{ repo.updated_at }}</p>
      <a class="text" :href="repo.html_url" target="_blank">GO TO REP</a>
    </article>
  </section>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters(["allRepositories"]),
  },
  methods: {
    ...mapActions(["getRepositories"]),
    getRepositoriesByName(name) {
      if (name == null) {
        this.name = "user";
      } else {
        this.name = name + "+in:name";
      }
    },
  },
  async mounted() {
    this.getRepositories(this.getRepositoriesByName);
  },
};
</script>
