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
    // doneTodosCount() {
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