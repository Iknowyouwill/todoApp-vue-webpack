<template>
  <section class="real-app">
    <input 
      type="text"
      class='add-item'
      autofocus='autofocus'
      placeholder='What do you wanna to do ?'
      @keyup.enter='addTodo'>
    <Item 
      v-for='todo in filteredTodos'
      :todo='todo'
      :key='todo.id'
      @del='delTodo'
    />
    <Tabs 
      :filter='filter' 
      :todos='todos'
      @toggleFilter='toggleFilterState'
      @clearAllCompleted='clearAllCompleted'></Tabs>
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
var id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs,
  },
  computed: {
    filteredTodos() {
      if(this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      //如果 filter 为 'completed' 则 completed 为 true
      // 'active' 则为 false
      //completed === todo.completed 
      //可以根据true和false分别过滤'completed'和'active'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo(e) {
      if(e.target.value.trim() === '') {
        alert('You input nothing, please try again.');
        return;
      }
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = '';
    },
    delTodo(id) {
      this.todos.splice(this.todos.findIndex(todo=>todo.id ===id), 1)
    },
    toggleFilterState(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style lang='stylus' scoped>
.real-app {
  width 600px
  margin 0 auto
  box-shadow  0 0 5px #666  
  text-align center 
}
.add-item {
  box-sizing: border-box;
  position relative 
  width 100%
  font-size 24px
  font-family inherit 
  font-weight inherit 
  line-height 2em
  border none
  outline none 
  color inherit 
  padding-left: 10px;
  
  box-shadow inset 0 -2px 0 rgba(0,0,0,0.5)
}
</style>

