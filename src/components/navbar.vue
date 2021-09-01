<template>
  <nav>
    <v-toolbar>
    <v-app-bar-nav-icon large class='grey--text' @click='drawer = !drawer'></v-app-bar-nav-icon>
      <v-toolbar-title class='text-uppercase grey--text'>
        <span class='font-weight-light'>Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer />

      <v-menu offset-y>
        <v-btn slot='activator' color='grey'>
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-item v-for='link in links' :key='link.text' router :to='link.route'>
            <v-list-item-title>{{ link.title }}</v-list-item-title>            
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color='grey'>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    
    <v-navigation-drawer app v-model='drawer' class='primary'>
      <v-layout column align-center>
        <v-flex class='mt-5'>
          <v-avatar size='100'>
            <img src='../assets/logo.png' />
          </v-avatar>
          <p class='white--text subheading mt-1'>Darcey</p>
        </v-flex>
        <v-flex class='mt-4 mb-3'>
          <Popup />
        </v-flex>
      </v-layout>
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
import Popup from './popup';
export default {
  components: { Popup },
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