<template>
    <v-app-bar
      app
      elevate-on-scroll
      class="text-uppercase grey--text"
      :class="this.$vuetify.theme.dark && 'text--lighten-2' || 'text--darken-2'"
    >
      <v-toolbar-title color="secondaryText"><span class="font-weight-bold">Car</span> Vue</v-toolbar-title>
      <v-spacer />
      <v-btn icon color="secondaryText">
        <v-icon>mdi-account-circle</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBar"
}
</script>