<template>
  <v-app>
    <AppBar />
    <Navigation />
    <v-main class="ma-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import Navigation from "@/components/Navigation/Navigation";

export default {
  name: 'App',
  components: {
    AppBar,
    Navigation
  }
};
</script>
