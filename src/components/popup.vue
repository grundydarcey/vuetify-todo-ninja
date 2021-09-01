<template>
  <v-dialog max-width='600px'>
    <template v-slot:activator="{ on }">
      <v-btn v-on='on' class='success'>
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class='px-3'>
          <v-text-field label='Title' prepend-icon='folder' v-model='title'></v-text-field>
          <v-textarea label='information' v-model='content' prepend-icon='edit'></v-textarea>
          <v-btn class='success mx-0 mt-3' @click='submit'>Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submit() {
      console.log(this.title, this.content)
    }
  }
}
</script>