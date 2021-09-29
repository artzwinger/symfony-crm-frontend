<template>
  <b-form @submit="onSubmit" v-if="show">
    <!-- Term -->
    <b-form-group id="input-group-term" label="Length of Class Help:" label-for="input-term" class="d-none">
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
          <cleave-phone
            v-model="form.phone"
            :options="cleavePhoneOptions"
            model-value="form.phone"
          ></cleave-phone>
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
    <!-- Amount Due Today -->
    <b-form-group
      id="input-group-amount-due-today"
      label="Amount Due Today:"
      label-for="input-amount-due-today"
    >
      <b-input-group prepend="$">
        <cleave
          v-model="form.amountDueToday"
          :options="cleaveMoneyOptions"
          :state="amountDueTodayLessThanOrEqualToTotal"
          placeholder="Amount Due Today"
        ></cleave>
      </b-input-group>
      <b-form-invalid-feedback :state="amountDueTodayLessThanOrEqualToTotal">
        Amount Due Today must be less than or equal to the total amount due.
      </b-form-invalid-feedback>
    </b-form-group>
    <!-- Price -->
    <b-form-group
      id="input-group-price"
      label="Total Price:"
      label-for="input-price"
    >
      <b-input-group prepend="$">
        <cleave
          :state="null"
          v-model="form.price"
          :options="cleaveMoneyOptions"
          placeholder="Total price"
        ></cleave>
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

    <!-- Due date time: only short-term form -->
    <slot name="single-due-date-input"
          v-bind:min-datetime="minDatetime"
          v-bind:set-due-date="setDueDate"></slot>
    <!-- Class Start/End date fields: only long-term form -->
    <slot name="class-start-end-date-inputs"
          v-bind:min-datetime="minDatetime"
          v-bind:set-class-start-date="setClassStartDate"
          v-bind:set-class-end-date="setClassEndDate"
    ></slot>

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
    <b-form-group id="input-group-instructions" :label="instructionsLabel"
                  label-for="input-instructions">
      <b-form-textarea
        id="input-instructions"
        v-model="form.instructions"
        placeholder="Enter instructions"
        required
      ></b-form-textarea>
    </b-form-group>

    <b-form-group id="input-group-file"
                  label-for="input-file">
      <b-form-file v-model="file" ref="file-input" placeholder="Please choose a file">
        <template slot="file-name" slot-scope="{ names }">
          <b-badge variant="dark">{{ names[0] }}</b-badge>
          <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
            + {{ names.length - 1 }} More files
          </b-badge>
        </template>
      </b-form-file>
    </b-form-group>

    <b-form-group id="input-group-agreement" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="form.agreement"
        id="checkboxes-agreement"
        :aria-describedby="ariaDescribedby"
      >
        <b-form-checkbox value="agree">
          I agree with the
          <a href="#" v-on:click="onTermsLinkClick">terms and conditions</a>
          and the
          <a href="#" v-on:click="onPrivacyLinkClick">privacy policy</a>
        </b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <b-button :disabled="!formValid" class="btn-primary btn-lg btn-block" type="submit" variant="primary">SEND</b-button>
  </b-form>
</template>

<script>
import wsse from "wsse";
import Cleave from "~/components/Cleave";
import CleavePhone from "~/components/CleavePhone";
import "cleave.js/dist/addons/cleave-phone.us.js"

export default {
  components: {
    cleave: Cleave,
    cleavePhone: CleavePhone
  },
  props: {
    term: '',
    instructionsLabel: {
      type: String,
      default: 'Instructions, Comments or Requests'
    }
  },
  data() {
    return {
      cleavePhoneOptions: {
        phone: true,
        phoneRegionCode: 'US',
      },
      cleaveMoneyOptions: {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
      },
      token: null,
      file: null,
      fileBase64: '',
      fileReader: null,
      form: {
        term: 'long',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        courseName: '',
        coursePrefixes: '',
        description: '',
        amountDueToday: 0.0,
        price: 0.0,
        workToday: 'no',
        dueDate: null,
        classStartDate: null,
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
      show: true,
    }
  },
  computed: {
    price() {
      return this.form.price ? parseFloat(this.form.price.split(',').join('')) : 0;
    },
    amountDueToday() {
      return this.form.amountDueToday ? parseFloat(this.form.amountDueToday.split(',').join('')) : 0;
    },
    amountDueTodayLessThanOrEqualToTotal() {
      if (this.amountDueToday === 0) {
        return null;
      }
      return this.amountDueToday <= this.price;
    },
    formValid() {
      const valid = this.amountDueTodayLessThanOrEqualToTotal;
      return null === valid || valid;
    }
  },
  watch: {
    file: function (newFile) {
      this.fileReader.readAsDataURL(newFile)
    }
  },
  methods: {
    setDueDate(val) {
      this.form.dueDate = val
    },
    setClassStartDate(val) {
      this.form.classStartDate = val
    },
    setClassEndDate(val) {
      this.form.dueDate = val
    },
    onTermsLinkClick(e) {
      this.$nuxt.$emit('terms-modal-trigger')
      e.preventDefault()
    },
    onPrivacyLinkClick(e) {
      this.$nuxt.$emit('privacy-modal-trigger')
      e.preventDefault()
    },
    async onSubmit(event) {
      event.preventDefault()
      this.$nuxt.$loading.start();
      const applicationCreateUrl = `${process.env.oro_protocol}://${process.env.oro_host}/api/applications`
      const applicationCreateData = await this.getApplicationCreateData()
      if (this.file && this.fileBase64.length > 1) {
        const fileUploadResponse = await this.uploadFile()
        if (fileUploadResponse.data && fileUploadResponse.data.id) {
          applicationCreateData.data.relationships.attachment = {
            "data": {
              "type": "files",
              "id": fileUploadResponse.data.id
            }
          }
        }
      }
      console.log(applicationCreateData)
      await this.$axios.$post(applicationCreateUrl, applicationCreateData, {headers: await this.getHeaders()})
      this.$nuxt.$loading.finish();
      await this.$router.push('success');
    },

    async uploadFile() {
      return await this.$axios.$post(`${process.env.oro_protocol}://${process.env.oro_host}/api/files`, {
        "data":
          {
            "type": "files",
            "attributes": {
              "mimeType": this.file.type,
              "originalFilename": this.file.name,
              "parentFieldName": "attachment",
              "content": this.fileBase64
            }
          }
      }, {headers: await this.getHeaders()})
    },

    async getApplicationCreateData() {
      let token = null
      try {
        token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token)
      } catch (error) {
        console.log('Login error:', error)
        throw error
      }
      return {
        "data": {
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
            "price": this.price,
            "amountDueToday": this.amountDueToday,
            "workToday": this.form.workToday,
            "dueDate": this.form.dueDate,
            "classStartDate": this.form.classStartDate,
            "courseUrl": this.form.courseUrl,
            "userLogin": this.form.userId,
            "userPassword": this.form.userPassword,
            "instructions": this.form.instructions,
            "reCaptchaToken": token
          },
          "relationships": {
            "status": {
              "data": {
                "type": "applicationstatuses",
                "id": "new"
              }
            },
            "rep": {
              "data": {
                "type": "applicationreps",
                "id": "sales"
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
      }
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
    // this.getToken()
    this.form.term = this.term
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }

    this.fileReader = new FileReader()
    this.fileReader.addEventListener("load", _ => {
      const t = this.fileReader.result.split(',')
      this.fileBase64 = t[t.length - 1]
    }, false)

    console.log(this.$recaptcha.siteKey)
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
