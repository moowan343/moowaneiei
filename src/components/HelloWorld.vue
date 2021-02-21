<template>
  <div class="hello">
    <h1>{{doneTodosCount}}</h1>
    <h1>{{doubleCounter}} </h1>
    <h1>{{getTodoById(3)}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
     //doneTodosCount() {
       //return this.$store.getters.doneTodosCount
     //},
    ...mapGetters([
      'doneTodosCount',
      'doubleCounter',
      'getTodoById'
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
