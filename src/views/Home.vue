<template>
  <div class='home'>
    <h1>Home page</h1>
    <v-btn class='pink white--text'>Click Me</v-btn>
    <v-btn depressed color='pink' >Click mee</v-btn>
    <v-btn flat color='pink'>Click</v-btn>
    <v-btn depressed class='pink white--text'>
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn depressed small class='pink white--text'>
      <v-icon small left>email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn large depressed class='pink white--text'>
      <v-icon small right>email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn fab depressed small dark color='purple'>
      <v-icon>favorite</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {    
   
}
</script>