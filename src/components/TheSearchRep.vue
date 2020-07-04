<template>
  <section class="main__items">
    <form action="" class="placeholder">
      <input
        type="text"
        class="placeholder__input"
        placeholder="Name repository"
        v-model="name"
      />
      <button @click="getRepoByName()" class="btn-search">
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
    <article class="paginator">
      <button class="paginator__btn" @click="prevPage()">Prev</button>
      <router-link
        :to="'/page/' + page"
        class="paginator__page "
        v-for="page in 5"
        :key="page"
      >
        {{ page }}
      </router-link>
      <button class="paginator__btn" @click="nextPage()">Next</button>
    </article>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  watch: {
    $route: "goToPage",
  },
  computed: {
    ...mapGetters(["allRepositories", "getPageCount"]),
    page: function() {
      return this.$route.params.page;
    },
  },
  methods: {
    ...mapActions(["getRepositories"]),
    goToPage() {
      this.getRepositories({ name: this.name, page: this.page });
    },
    getRepoByName() {
      if (this.$route.path === "/") {
        this.getRepositories({ name: this.name, page: this.page });
      } else {
        this.$router.push("/");
      }
    },
    nextPage() {
      if (Number(this.$route.params.page) + 1 <= this.getPageCount) {
        this.$router.push("/page/" + (Number(this.$route.params.page) + 1));
      }
    },
    prevPage() {
      if (this.$route.params.page - 1 >= 1) {
        this.$router.push("/page/" + (this.$route.params.page - 1));
      }
    },
  },
  async created() {
    console.log(this);
    this.getRepositories({ name: this.name, page: this.$route.params.page });
  },
};
</script>
