<template>
  <main>
    <the-search-rep />
  </main>
</template>
<script>
export default {
  components: {
    "the-search-rep": () => import("./TheSearchRep.vue"),
  },
};
</script>
