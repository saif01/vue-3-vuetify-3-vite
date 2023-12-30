<template>
  <v-app>
    <v-main>
      <NavBar />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from './views/common/Nav.vue'

export default {

  components: {
    NavBar,
  }


}

</script>

<style></style>
