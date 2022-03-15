<template>
  <div>
    <h2 class="text-center">
      Login
    </h2>
    <hr>
    <b-alert v-if="errorMessage" show variant="danger">
      {{ errorMessage }}
    </b-alert>
    <b-alert v-if="$auth.$state.redirect" show>
      You have to login before accessing to
      <strong>{{ $auth.$state.redirect }}</strong>
    </b-alert>
    <b-row align-h="center" class="pt-4">
      <b-col md="1" align-self="center">
        <div class="text-center">
          <b-badge pill>
            OR
          </b-badge>
        </div>
      </b-col>
      <b-col md="4" class="text-center">
        <b-card title="Salesforce Login" bg-variant="light">
          <div v-for="s in strategies" :key="s.key" class="mb-2">
            <b-btn
              block
              :style="{background: s.color}"
              class="login-button"
              @click="$auth.loginWith(s.key)"
            >
              Login with {{ s.name }}
            </b-btn>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.login-button {
  border: 0;
}
</style>

<script>

export default {
  data () {
    return {
 
    }
  },
  computed: {
    strategies: () => [
      { key: 'salesforce', name: 'Salesforce', color: '#blue' },

    ],
    redirect () {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    },
    isCallback () {
      return Boolean(this.$route.query.callback)
    },
    errorMessage () {
      const { error } = this
      if (!error || typeof error === 'string') {
        return error
      }
      let msg = ''
      if (error.message) {
        msg += error.message
      }
      if (error.errors) {
        msg += `(${JSON.stringify(error.errors)
          .replace(/[{}"[\]]/g, '')
          .replace(/:/g, ': ')
          .replace(/,/g, ' ')})`
      }
      return msg
    }
  },
  methods: {
    async login () {
      this.error = null

      return this.$auth
        .loginWith('salesforce')
        .catch((e) => {
          this.error = e.response.data
        })
    },
  }
}
</script>
