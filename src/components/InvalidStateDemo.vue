<template>
  <div class="grid p-fluid">
    <div class="col">
      <div class="card">
        <h5>Invalid State</h5>
        <div class="p-fluid grid">
          <div class="col-12 md:col-6">
            <div class="field">
              <label for="inputtext">InputText</label>
              <InputText id="inputtext" v-model="value1" class="p-invalid" type="text"/>
            </div>
            <div class="field">
              <label for="autocomplete">AutoComplete</label>
              <AutoComplete id="autocomplete" v-model="value2" :suggestions="filteredCountries"
                            class="p-invalid" field="name" @complete="searchCountry($event)"/>
            </div>
            <div class="field">
              <label for="calendar">Calendar</label>
              <Calendar id="calendar" v-model="value3" :showIcon="true" class="p-invalid"/>
            </div>
            <div class="field">
              <label for="chips">Chips</label>
              <Chips id="chips" v-model="value4" class="p-invalid"/>
            </div>
            <div class="field">
              <label for="password">Password</label>
              <Password id="password" v-model="value10" class="p-invalid"/>
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="field">
              <label for="inputmask">InputMask</label>
              <InputMask id="inputmask" v-model="value5" class="p-invalid" mask="99/99/9999" slotChar="mm/dd/yyyy"/>
            </div>
            <div class="field">
              <label for="inputnumber">InputNumber</label>
              <InputNumber id="inputnumber" v-model="value6" class="p-invalid"/>
            </div>
            <div class="field">
              <label for="dropdown">Dropdown</label>
              <Dropdown id="dropdown" v-model="value7" :options="cities" class="p-invalid" optionLabel="name"/>
            </div>
            <div class="field">
              <label for="multiselect">MultiSelect</label>
              <MultiSelect id="multiselect" v-model="value8" :options="cities" class="p-invalid" optionLabel="name"/>
            </div>
            <div class="field">
              <label for="textarea">Textarea</label>
              <Textarea id="textarea" v-model="value9" class="p-invalid" rows="3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CountryService from '../service/CountryService';

export default {
  data() {
    return {
      countries: null,
      filteredCountries: null,
      cities: [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
      ],
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
      value7: null,
      value8: null,
      value9: null,
      value10: null
    }
  },
  countryService: null,
  created() {
    this.countryService = new CountryService();
  },
  mounted() {
    this.countryService.getCountries().then(data => this.countries = data);
  },
  methods: {
    searchCountry(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCountries = [...this.countries];
        } else {
          this.filteredCountries = this.countries.filter((country) => {
            return country.name.toLowerCase().startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    }
  }
}
</script>
