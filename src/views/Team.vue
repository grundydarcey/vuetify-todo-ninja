<template>
  <div class='team'>
    <h1 class='subheading grey--text'>Team</h1>
    <v-container class='my-5'>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for='person in team' :key='person.name'>
          <v-card class='text-xs-center ma-3'>
            <v-responsive class='pt-4'>
              <v-avatar size='100' class='grey lighten-2'>
                <img src='person.avatar'>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class='subheading'>
                {{ person.name }}
              </div>
              <div class='grey--text'>
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color='grey'>
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {    
  data() {
    return {
      team: [
        { name: 'Net Ninja', role: 'Web Developer', avatar: './assets/logo.png' },
        { name: 'Ryu', role: 'Graphic Designer', avatar: './assets/logo.png' },
        { name: 'Chun Li', role: 'Web Developer', avatar: './assets/logo.png' },
        { name: 'Gouken', role: 'Social Media Maverick', avatar: './assets/logo.png' },
        { name: 'Yoshi', role: 'Sales Guru', avatar: './assets/logo.png' }
      ]
    }
  }
}
</script>