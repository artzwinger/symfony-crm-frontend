<template>
  <div class="container vh-100 d-flex align-items-center justify-content-center">
    <div class="jumbotron text-center" style="background: #f2efed">
      <h1 class="display-4" style="color: #f75845">THANK YOU!</h1>
      <p class="lead">We work on your request.</p>
      <hr>
      <p>Having trouble? <a href="mailto:sales@onlineclasshelp.com">Contact Us</a></p>
      <p class="lead">
        <nuxt-link class="btn btn-primary btn-sm" role="button" to="/">Continue to homepage</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: 'A course successfully requested',
    }
  }
})
</script>

