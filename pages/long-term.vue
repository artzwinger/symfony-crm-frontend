<template>
  <div>
    <Header text="Sign Up For Long Term Classes"/>
    <div class="container d-flex align-items-center justify-content-center">
      <div class="content-container shadow-lg bg-white rounded p-5">
        <LongTermForm/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LongTermForm from "~/components/LongTermForm.vue";
import Header from "~/components/Header.vue";

export default Vue.extend({
  components: {Header, LongTermForm},
  head() {
    return {
      title: 'Long term sign up',
    }
  }
})
</script>

<style lang="scss">
.content-container {
  font-size: 14px;
}
</style>

