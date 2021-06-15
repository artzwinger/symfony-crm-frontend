<template>
  <div class="inner-header d-flex align-items-center justify-content-center">
    <h1 class="font-weight-bold text-uppercase">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    text: ''
  },
}
</script>

<style lang="scss">
.inner-header {
  background: #f2efed url("assets/Inner-Page-Banner.png") center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 150px;
  h1 {
    color: #fff;
  }
}
</style>
