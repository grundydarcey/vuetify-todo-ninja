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
        <v-form ref='form' class='px-3'>
          <v-text-field :rules='inputRules' label='Title' prepend-icon='folder' v-model='title'></v-text-field>
          <v-textarea label='information' :rules='inputRules' v-model='content' prepend-icon='edit'></v-textarea>
          <v-menu>
            <v-text-field :value='formattedDate' label='Due date' prepend-icon='date_range' slot='activator'></v-text-field>
            <template v-slot:activator='{ on }'>
              <v-date-picker v-on='on' v-model='due'></v-date-picker>
            </template>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn class='success mx-0 mt-3' @click='submit'>Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format';
import db from '@/fb'
export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.vaildate()) {
        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, 'Do MMM YYYY'),
          person: 'The Net Ninja',
          status: 'ongoing'
        }   
        db.collection('projects').add(project).then(() => {
          console.log('added to db')
        })
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, 'Do MMM YYYY') : '' 
    }
  }
}
</script>