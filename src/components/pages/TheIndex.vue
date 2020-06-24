<template>
  <div class="container">
    <the-header title="Поиск репозиториев" />
    <the-main />
    <!-- <the-footer /> -->
  </div>
</template>
<script>
export default {
  components: {
    "the-header": () => import("../TheHeader.vue"),
    "the-main": () => import("../TheMain.vue"),
    /*  "the-footer": () => import("../TheFooter.vue"), */
  },
};
</script>
