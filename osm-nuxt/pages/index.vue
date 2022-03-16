<template>
  <div>{{ $auth.$state.loggedIn ? "Logged In" : "Guest" }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
