<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create New Object</h1>
        <v-form v-model="valid" ref="form" lazy-validation class="mb-3">
          <v-text-field
            name="title"
            label="Add title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field
            multi-line
            name="description"
            label="Add Description"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
          ></v-text-field>
        </v-form>

        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning">Upload Image</v-btn>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <img src="" height="100">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-switch
              color="primary"
              v-model="promo"
              label="Add Promo"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              class="success"
              @click="createObject"
              :disabled="!valid"
            >Create Object
            </v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createObject() {
        if (this.$refs.form.validate()) {
          const object = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
        }

      }
    }
  }
</script>
