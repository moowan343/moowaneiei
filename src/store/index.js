import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    todos: [
      { id: 1, text: 'A', done: true },
      { id: 2, text: 'B', done: false },
      { id: 3, text: 'C', done: true }
    ]
  },
  getters: {
    // 1. คำนวนสมการ
    doubleCounter: state => {
      return state.counter +=  2 * 3 * 5
    },
    // 2. กรองข้อมูลเฉพาะงานที่เสร็จแล้ว done=true
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // 3.  นับจำนวนงานที่เสร็จแล้ว (ต่อจากข้อ 2)
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    // ค้นหา object งานจากค่า id
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
