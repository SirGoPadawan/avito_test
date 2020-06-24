<template>
  <div class="container-about">
    <the-header title="Информация о репозитории" />
    <the-user-rep />
  </div>
</template>
<script>
export default {
  components: {
    "the-header": () => import("../TheHeader.vue"),
    "the-user-rep": () => import("../TheUserRep.vue"),
  },
};
</script>
