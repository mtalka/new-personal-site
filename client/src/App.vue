<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.v-application {
  font-family: Inconsolata, monospace !important;
}
</style>
