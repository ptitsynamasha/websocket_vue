<template>
  <v-container>
    <v-layout row>

      <v-flex xs12 class="text-xs-center" pt-5 v-if="loading">
        <v-progress-circular
          :size="100"
          :width="4"
          color="purple"
          indeterminate
        ></v-progress-circular>
      </v-flex>

      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list
          subheader
          two-line
        >

          <v-list-tile
            avatar
            v-for="order of orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                :input-value="order.done"
                @change="markDone(order)"
                color="success"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="notifications = !notifications">
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                class="primary"
                :to="'/object/'+order.objectId "
              >Open
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>
      </v-flex>

      <v-flex xs12 class="text-xs-center" v-else>
        <h1 class="text--secondary">You have no orders</h1>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        orders: [
          {
            id: '1',
            name: "masha",
            phone: '00000',
            objectId: '2',
            done: false
          }
        ]
      }
    },
    methods: {
      markDone(order) {
        order.done = true
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading;
      }
    },
    created() {
      this.$store.dispatch('fetchOrders')
    }
  }
</script>
