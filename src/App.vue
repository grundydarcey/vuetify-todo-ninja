<template>
  <v-app class='grey lighten-4'>
    <Navbar></Navbar>
    <v-main class='mx-4 mb-4'>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar.vue';
export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
