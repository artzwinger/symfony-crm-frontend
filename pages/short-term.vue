<template>
  <div>
    <Header text="Sign Up For Short Term Classes"/>
    <div class="container d-flex align-items-center justify-content-center">
      <div class="content-container shadow-lg bg-white rounded p-5">
        <ShortTermForm/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ShortTermForm from "~/components/ShortTermForm.vue";
import Header from "~/components/Header.vue";

export default Vue.extend({
  components: {ShortTermForm, Header},
  head() {
    return {
      title: 'Short term sign up',
    }
  }
})
</script>

<style lang="scss">
.content-container {
  font-size: 14px;
}
</style>
