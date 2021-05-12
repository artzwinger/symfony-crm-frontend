<template>
  <div>
    <div class="sign-up-image-container">
      <div class="container flex-column align-items-start">
        <span class="red-heading">Sign up for your</span>
        <span class="blue-heading">Onliner tutoring package</span>
      </div>
    </div>
    <div class="container flex-column">
      <h2 class="forms-title">
        Sign Up For Your Online Tutoring Package
      </h2>
      <div class="d-inline-flex">
        <div class="sign-up-container">
          <span>Sign up for Long-term class help</span>
          <div class="sign-up-link-container">
            <nuxt-link to="long-term">Long term sign up</nuxt-link>
          </div>
        </div>
        <div class="sign-up-container">
          <span>Sign up for Short-term class help</span>
          <div class="sign-up-link-container">
            <nuxt-link to="short-term">Short term sign up</nuxt-link>
          </div>
        </div>
        <div class="sign-up-container">
          <span>Make a Payment</span>
          <div class="sign-up-link-container">
            <a href="#" onclick="alert('Sincerely apologies, at this moment you cannot make payments in this demo version.')">Make a payment</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.sign-up-image-container {
  background: #f2efed url("assets/home-sign-up-background.jpg") top right no-repeat;
  height: 480px;
  padding-top: 200px;

  span {
    font-weight: bold;
    font-size: 44px;
    line-height: 44px;
    display: block;
    text-transform: uppercase;
    text-align: left;

    &.red-heading {
      color: #f75845;
    }

    &.blue-heading {
      color: #293b61;
      font-style: italic;
    }
  }
}

.forms-title {
  font-weight: bold;
  color: #293b61;
  margin: 50px 35px;
  display: block;
}

.sign-up-container {
  border-radius: 5px;
  border: 2px solid #293b61;
  padding: 25px 0 15px 0;
  min-width: 350px;
  font-weight: bold;
  margin-left: 50px;
  &:nth-child(1) {
    margin-left: 0;
  }

  .sign-up-link-container {
    margin: 50px 25px;

    a {
      color: #ffffff;
      font-weight: bold;
      text-transform: uppercase;
      background: #f85945;
      border-radius: 5px;
      padding: 15px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.container {
  margin: 0 auto;
  min-height: auto;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
