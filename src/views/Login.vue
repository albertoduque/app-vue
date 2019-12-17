<template>
  <div>
    <h2>Ingreso de información del hotel</h2>
  <b-form @submit="onSubmit" >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Ingrese el nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Ciudad:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.city"
          :options="cities"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  import axios from 'axios'
  import api from '@/services/api'
  export default {
    data(){
      return {
        form: {
          email: '',
          name: '',
          city: null,
          checked: []
        },
        cities: [{ text: 'Select One', value: null }],
        show: true
      }
    },
    async created () {
      let { data } = await api.getCities()
      this.cities = [...this.cities, ...data.map(item => { 
        return {
          value: item.id ,
          text: item.name
        } 
      })]
      console.log(this.cities)
    },  
    methods: {
      onSubmit: function () {
        const email = this.email 
        const password = this.password
        let webApiUrl = 'https://app-hotels-test.herokuapp.com/cities';
        let tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlc2Fycm9sbG8udGluZ2VyQGdtYWlsLmNvbSIsImlhdCI6MTU3NjQ3Nzk0NywiZXhwIjoxNTc2NDc4OTA3fQ.PmBVVBejK8JhLXdlCZD_OXeuG2TuCZ6eq30YIbOxF1I';
        /*axios.post(webApiUrl,{
            "nombre": "alberto",
            "correo": "duque.alberto@gmail.com",
            "descripcion": "Pago con tarjeta de credito",
            "monto": 20000,
            "token": "cab9e4d8-01a3-3e79-ba86-86fdc7deecbb",
            "cuotas": 3,
            "metodo_pago" : "Visa",
            "referencia": "a123123",
            "url_response": "www.url.com"
          }, { headers: {"Authorization" : `Bearer ${tokenStr}`} }) */
          axios.get(webApiUrl)
      }
    }
  }
</script>
