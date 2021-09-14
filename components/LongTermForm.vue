<template>
  <basic-term-form term="long" instructionsLabel="Instructions, Comments, Due Dates, or Requests">
    <template v-slot:class-start-end-date-inputs="slotProps">
      <b-form-group id="input-group-class-start-date" label="Class Start Date" label-for="input-class-start-date">
        <datetime
          type="datetime"
          input-id="input-class-start-date"
          input-class="form-control"
          value-zone="America/New_York"
          :format="{ year: 'numeric', month: 'long', day: 'numeric' }"
          :phrases="{ok: 'OK', cancel: 'Exit'}"
          :min-datetime="slotProps.minDatetime"
          :week-start="7"
          :flow="['date']"
          auto
          @input="slotProps.setClassStartDate"
        ></datetime>
      </b-form-group>
      <b-form-group id="input-group-class-end-date" label="Class End Date" label-for="input-class-end-date">
        <datetime
          type="datetime"
          input-id="input-class-end-date"
          input-class="form-control"
          value-zone="America/New_York"
          :format="{ year: 'numeric', month: 'long', day: 'numeric' }"
          :phrases="{ok: 'OK', cancel: 'Exit'}"
          :min-datetime="slotProps.minDatetime"
          :week-start="7"
          :flow="['date']"
          auto
          @input="slotProps.setClassEndDate"
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
  }
}
</script>
