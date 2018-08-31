<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>

      <v-flex d-flex md4>
        <v-card color="purple lighten-1" dark>
          <v-card-title primary class="title">User current</v-card-title>
          <v-card-text>

            <v-subheader inset>Users</v-subheader>
            <v-list-tile v-for="item in items2" :key="item.title">

              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                {{ item.title }}
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon color="grey lighten-1">star_rate</v-icon>
              </v-list-tile-action>

            </v-list-tile>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex md8>
        <v-layout column wrap>

          <v-flex d-flex>
            <v-card color="deep-purple lighten-3" dark>
              <v-flex text-xs-center>

                <div>
                  <v-btn color="primary" @click="getPreviousMessage()">Previous message</v-btn>
                </div>

              </v-flex>
              <v-flex md5>
                <v-card-text>
                  <span class="purple--text">Number 10</span><br>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, perferendis!
                </v-card-text>
              </v-flex>

              <v-flex md5 offset-md9>
                <v-card-text color="yellow">
                  <span class="purple--text right">Number 10</span><br>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, obcaecati.
                </v-card-text>
              </v-flex>
            </v-card>
          </v-flex>

          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="grey lighten-1" dark>
                  <v-card-text>

                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        v-model="message"
                        :rules="messageRules"
                        :counter="80"
                        label="Message"
                        required
                      ></v-text-field>

                      <v-btn
                        class="primary"
                        :disabled="!valid"
                        @click="submit"
                      >
                        submit
                      </v-btn>
                      <v-btn
                        class="primary"
                        @click="clear"
                      >clear
                      </v-btn>
                    </v-form>

                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
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
        items: [
          {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014'},
          {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014'},
          {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014'}
        ],
        items2: [
          {icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014'},
          {icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014'}
        ],
        valid: true,
        message: '',
        messageRules: [
          v => !!v || 'Message is required',
          v => (v && v.length <= 80) || 'Message must be less than 80 characters'
        ],
      }
    },
    methods: {
      submit() {

      },
      clear() {
        this.$socket.emit('login', this.$store.getters.userChat.token)


      },
      getPreviousMessage() {

      }
    },
    // created(){

    //
    // }
  }
</script>
