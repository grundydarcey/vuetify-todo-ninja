<template>
  <nav>
    <v-app-bar app>
    <v-toolbar-side-icon class='purple--text' @click='drawer = !drawer'></v-toolbar-side-icon>
      <v-toolbar-title class='text-uppercase grey--text'>
        <span class='font-weight-light'>Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn text color='grey'>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model='drawer' class='indigo'>
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    }
  }
}
</script>