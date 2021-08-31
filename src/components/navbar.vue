<template>
  <nav>
    <v-toolbar>
    <v-app-bar-nav-icon large class='grey--text' @click='drawer = !drawer'></v-app-bar-nav-icon>
      <v-toolbar-title class='text-uppercase grey--text'>
        <span class='font-weight-light'>Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn text color='grey'>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model='drawer' class='primary'>
      <v-list>
        <v-list-item v-for='link in links' :key='link.text' router :to='link.route'>
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class='white--text'>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/'},
        { icon: 'folder', text: 'My Projects', route: '/projects'},
        { icon: 'person', text: 'Team', route: '/team'},
      ]
    }
  }
}
</script>