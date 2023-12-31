<template>
  <v-app>
    <v-main>
      <nav-component />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavComponent from "./views/common/Nav.vue";

export default {
  components: {
    NavComponent,
  },
};
</script>

<style></style>
