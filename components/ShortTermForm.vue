<template>
  <div>
    <b-progress :value="progressValue" variant="info" v-if="progress" class="mt-2"></b-progress>
    <div class="badge-success" v-if="success">Application successfully sent</div>
    <b-form @submit="onSubmit" v-if="show">
      <!-- Subject -->
      <b-form-group
        id="input-group-subject"
        label="Subject:"
        label-for="input-subject"
        description="What is the application about"
      >
        <b-form-input
          id="input-subject"
          v-model="form.subject"
          type="text"
          placeholder="Enter subject"
          required
        ></b-form-input>
      </b-form-group>

      <!-- Description -->
      <b-form-group id="input-group-description" label="Description:" label-for="input-description">
        <b-form-textarea
          id="input-description"
          v-model="form.description"
          placeholder="Enter description"
          required
        ></b-form-textarea>
      </b-form-group>

      <!-- Student login info -->
      <b-form-group id="input-group-student-login-info"
                    description="Enter student login info: First/Last name, email, password"
                    label="Student login info:"
                    label-for="input-student-login-info">
        <b-form-textarea
          id="input-student-login-info"
          v-model="form.studentLoginInfo"
          required
        ></b-form-textarea>
      </b-form-group>

      <!-- Term -->
      <b-form-group id="input-group-term" label="Term:" label-for="input-term">
        <b-form-select
          id="input-term"
          v-model="form.term"
          :options="terms"
          required
        ></b-form-select>
      </b-form-group>

      <!-- Subject -->
      <b-form-group
        id="input-group-price"
        label="Price:"
        label-for="input-price"
        description="Price that you want the lessons to be in United States Dollars ($)"
      >
        <b-form-input
          id="input-price"
          v-model="form.price"
          type="number"
          min="0.00"
          step="0.05"
          placeholder="Enter price"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-agreement" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.agreement"
          id="checkboxes-agreement"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="agree">Agree to process my personal data</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "core-js/internals/internal-state";
import wsse from "wsse";

export default {
  data() {
    return {
      token: null,
      success: false,
      progress: true,
      progressValue: 25,
      form: {
        subject: '',
        description: '',
        studentLoginInfo: '',
        term: 'short',
        price: 0.0,
        agreement: []
      },
      terms: [
        {
          text: 'Short-term',
          value: 'short'
        },
        {
          text: 'Long-term',
          value: 'long'
        },
      ],
      show: true
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      this.progress = true;
      const tm = setTimeout(() => {
        this.progressValue = 50
      }, 500);
      await this.$axios.$post(`${process.env.oro_protocol}://${process.env.oro_host}/api/applications`, {
        "data":
          {
            "type": "applications",
            "id": "0",
            "attributes": {
              "subject": this.form.subject,
              "description": this.form.description,
              "studentLoginInfo": this.form.studentLoginInfo,
              "price": this.form.price
            },
            "relationships": {
              "status": {
                "data": {
                  "type": "applicationstatuses",
                  "id": "new"
                }
              },
              "term": {
                "data": {
                  "type": "applicationterms",
                  "id": this.form.term
                }
              }
            }
          }
      }, {headers: await this.getHeaders()})
      clearTimeout(tm);
      this.success = true;
      this.progress = false;
    },

    async getToken() {
      if (this.token !== null) {
        return this.token.newToken()
      }
      this.token = wsse({
        username: process.env.oro_account_email,
        password: process.env.oro_account_api_key
      })
      return this.token
    },

    async getHeaders() {
      return ({
        'Authorization': `WSSE profile="UsernameToken"`,
        'X-WSSE': (await this.getToken()).getWSSEHeader({nonceBase64: true}),
        'Content-Type': 'application/vnd.api+json'
      })
    }
  },
  mounted() {
    // this.getToken();
  }
}
</script>

<style>

</style>
