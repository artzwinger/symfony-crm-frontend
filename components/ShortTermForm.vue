<template>
  <basic-term-form term="short">
    <template v-slot:single-due-date-input="slotProps">
      <b-form-group id="input-group-due-date-time" label="Due Date and Time" label-for="input-due-date-time">
        <datetime
          type="datetime"
          input-id="input-due-date-time"
          input-class="form-control"
          value-zone="America/New_York"
          :format="{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }"
          :phrases="{ok: 'Continue', cancel: 'Exit'}"
          :hour-step="1"
          :minute-step="10"
          :min-datetime="slotProps.minDatetime"
          :week-start="7"
          use12-hour
          auto
          @input="slotProps.setDueDate"
        ></datetime>
      </b-form-group>
    </template>
  </basic-term-form>
</template>

<script>
import BasicTermForm from "~/components/BasicTermForm";
import {Datetime} from "vue-datetime";

export default {
  components: {
    datetime: Datetime,
    basicTermForm: BasicTermForm
  },
  mounted() {
  }
}
</script>
