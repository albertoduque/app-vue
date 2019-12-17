<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
    methods: {
      signup: function () {
        let info = {
          name: this.name,
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('signup', info).then(() => this.$router.push('/login'))

      }
    }
  }
</script>
