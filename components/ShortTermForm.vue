<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <!-- Term -->
      <b-form-group id="input-group-term" label="Length of Class Help:" label-for="input-term">
        <b-form-select
          id="input-term"
          v-model="form.term"
          :options="terms"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-row>
        <b-col>
          <b-form-group
            id="input-group-first-name"
          >
            <b-form-input
              id="input-first-name"
              v-model="form.firstName"
              type="text"
              placeholder="First Name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-last-name"
          >
            <b-form-input
              id="input-last-name"
              v-model="form.lastName"
              type="text"
              placeholder="Last Name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-form-group
            id="input-group-email"
          >
            <b-form-input
              id="input-email"
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-phone"
          >
            <cleave
              v-model="form.phone"
              :options="cleavePhoneOptions"
              model-value="form.phone"
            ></cleave>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-form-group
            id="input-group-course-name"
          >
            <b-form-input
              id="input-course-name"
              v-model="form.courseName"
              type="text"
              placeholder="Enter Course Name(s)"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-course-prefixes"
          >
            <b-form-input
              id="input-course-prefixes"
              v-model="form.coursePrefixes"
              type="text"
              placeholder="Enter Course Prefixes"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <!-- Description -->
      <b-form-group id="input-group-description" label="What are we helping you with? Be as specific as possible:"
                    label-for="input-description">
        <b-form-textarea
          id="input-description"
          v-model="form.description"
          placeholder="Enter description"
          required
        ></b-form-textarea>
      </b-form-group>
      <!-- Price -->
      <b-form-group
        id="input-group-price"
        label="Total Price:"
        label-for="input-price"
      >
        <b-input-group prepend="$">
          <b-form-input
            id="input-price"
            v-model="form.price"
            type="number"
            min="0.00"
            step="0.05"
            placeholder="Enter price"
            required
          ></b-form-input>
        </b-input-group>
      </b-form-group>

      <!-- Work today -->
      <b-form-group id="input-group-work-today" label="Do you have work due today?" label-for="input-work-today">
        <b-form-select
          id="input-work-today"
          v-model="form.workToday"
          :options="workToday"
          required
        ></b-form-select>
      </b-form-group>

      <!-- Due date time -->
      <b-form-group id="input-group-due-date-time" label="Due Date and Time" label-for="input-due-date-time">
        <datetime
          type="datetime"
          v-model="form.dueDate"
          input-id="input-due-date-time"
          input-class="form-control"
          value-zone="America/New_York"
          :format="{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }"
          :phrases="{ok: 'Continue', cancel: 'Exit'}"
          :hour-step="1"
          :minute-step="10"
          :min-datetime="minDatetime"
          :week-start="7"
          use12-hour
          auto
        ></datetime>
      </b-form-group>

      <!-- Course URL -->
      <b-form-group
        id="input-group-course-url"
        label="Course URL (School Website):"
        label-for="input-course-url"
      >
        <b-form-input
          id="input-course-url"
          v-model="form.courseUrl"
          type="text"
          placeholder="Enter Course URL"
          required
        ></b-form-input>
      </b-form-group>

      <!-- User ID -->
      <b-form-row>
        <b-col>
          <b-form-group
            id="input-group-user-id"
            label="User ID:"
            label-for="input-user-id"
          >
            <b-form-input
              id="input-user-id"
              v-model="form.userId"
              type="text"
              placeholder="Enter User Login"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-user-password"
            label="Password:"
            label-for="input-user-password"
          >
            <b-form-input
              id="input-user-password"
              v-model="form.userPassword"
              type="text"
              placeholder="Enter User Password"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <!-- Instructions -->
      <b-form-group id="input-group-instructions" label="Instructions, Comments or Requests"
                    label-for="input-instructions">
        <b-form-textarea
          id="input-instructions"
          v-model="form.instructions"
          placeholder="Enter instructions"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-agreement" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.agreement"
          id="checkboxes-agreement"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="agree">
            I agree with the
            <nuxt-link to="terms-and-conditions">terms and conditions</nuxt-link>
            and the
            <nuxt-link to="privacy-policy">privacy policy</nuxt-link>
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button class="btn-primary btn-lg btn-block" type="submit" variant="primary">SEND</b-button>
    </b-form>
  </div>
</template>

<script>
import wsse from "wsse";
import {Datetime} from 'vue-datetime';
import Cleave from "~/components/Cleave";
import "cleave.js/dist/addons/cleave-phone.us.js"

export default {
  components: {
    datetime: Datetime,
    cleave: Cleave
  },
  data() {
    return {
      cleavePhoneOptions: {
        phone: true,
        phoneRegionCode: 'US',
      },
      token: null,
      form: {
        term: 'short',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        courseName: '',
        coursePrefixes: '',
        description: '',
        price: 0.0,
        workToday: 'no',
        dueDate: null,
        courseUrl: '',
        userId: '',
        userPassword: '',
        instructions: '',
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
      workToday: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
      ],
      minDatetime: Date.now().toString(),
      show: true
    }
  },
  methods: {
    async onSubmit(event) {
      this.$nuxt.$loading.start();
      event.preventDefault()
      let token = null;
      try {
        token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token)

        // send token to server alongside your form data

      } catch (error) {
        console.log('Login error:', error)
        throw error
      }
      await this.$axios.$post(`${process.env.oro_protocol}://${process.env.oro_host}/api/applications`, {
        "data":
          {
            "type": "applications",
            "id": "0",
            "attributes": {
              "firstName": this.form.firstName,
              "lastName": this.form.lastName,
              "email": this.form.email,
              "phone": this.form.phone,
              "courseName": this.form.courseName,
              "coursePrefixes": this.form.coursePrefixes,
              "description": this.form.description,
              "price": this.form.price,
              "workToday": this.form.workToday,
              "dueDate": this.form.dueDate,
              "courseUrl": this.form.courseUrl,
              "userLogin": this.form.userId,
              "userPassword": this.form.userPassword,
              "instructions": this.form.instructions,
              "reCaptchaToken": token,
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
      this.$nuxt.$loading.finish();
      await this.$router.push('success');
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
        'Content-Type': 'application/vnd.api+json',
      })
    }
  },
  async mounted() {
    // this.getToken();
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e);
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  }
}
</script>

<style lang="scss">
.btn-primary {
  background: #f75845;
  border-color: #f75845;

  &:hover {
    background: #293b61;
    border-color: #293b61;
  }
}
</style>
