<template>
  <div>
    <h2>Login Page</h2>
    <form @submit="login">
      <div>
          <input placeholder="Your email" type="email" v-model="email">
      </div>
      <div>
          <input placeholder="Password" type="password" v-model="password">
      </div>
      <div>
          <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        email : "",
        password : ""
      }
    },
    methods: {
      login: function () {
        const email = this.email 
        const password = this.password
        let webApiUrl = 'http://localhost:3002/payment';
        let tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlc2Fycm9sbG8udGluZ2VyQGdtYWlsLmNvbSIsImlhdCI6MTU3NjQ3Nzk0NywiZXhwIjoxNTc2NDc4OTA3fQ.PmBVVBejK8JhLXdlCZD_OXeuG2TuCZ6eq30YIbOxF1I';
        axios.post(webApiUrl,{
            "nombre": "alberto",
            "correo": "duque.alberto@gmail.com",
            "descripcion": "Pago con tarjeta de credito",
            "monto": 20000,
            "token": "cab9e4d8-01a3-3e79-ba86-86fdc7deecbb",
            "cuotas": 3,
            "metodo_pago" : "Visa",
            "referencia": "a123123",
            "url_response": "www.url.com"
          }, { headers: {"Authorization" : `Bearer ${tokenStr}`} })
      }
    }
  }
</script>
