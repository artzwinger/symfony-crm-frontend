<template>
  <div class="container">
    <div>
      <h1>Sign Up For Long-Term Classes</h1>
      <LongTermForm />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LongTermForm from "~/components/LongTermForm.vue";

export default Vue.extend({
  components: {LongTermForm}
})
</script>

