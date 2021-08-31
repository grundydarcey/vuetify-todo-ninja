<template>
  <div class='dashboard'>
    <h1 class='subheading grey--text'>Dashboard</h1>
    <v-container class='my-5'>
      <v-card flat class='pa-3'>
        <v-layout row>
          <v-flex xs12 md6>
            <div class='caption grey--text'>Project Title</div>
            <div>Create a website</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class='caption grey--text'>Person</div>
            <div>Net Ninja</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class='caption grey--text'>Due by</div>
            <div>Jan 1st</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class='caption grey--text'>Status</div>
            <div>Ongoing</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {    
   
}
</script>