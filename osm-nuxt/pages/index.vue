<template>

  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <Logo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to Open Sandbox Manager
        </v-card-title>
        <v-card-text>
          <p>
           Logged In: {{this.$auth.loggedIn}}
          </p>

        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" v-on:click="login">Connect With Salesforce</v-btn>
                    <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
      async login() {
        const res = this.$auth.login('salesforce');
        console.log(res);
      }
  }
}
</script>
