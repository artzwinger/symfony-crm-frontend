<template>
  <div class="container">
    <div>
      <h1>Sign Up For Short-Term Classes</h1>
      <ShortTermForm />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ShortTermForm from "~/components/ShortTermForm.vue";

export default Vue.extend({
  components: {ShortTermForm}
})
</script>
