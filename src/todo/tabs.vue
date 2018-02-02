<template>
  <div class='tabs'>
    <span class="showItemsNum">{{unFinishedTodoLength}} items active</span>
    <div class="state-operator">
      <span 
        v-for='state in states'
        :state='state'
        :key='state'
        @click='toggleFilter(state)'
        :class="[state, filter === state ? 'selected':'']">{{state}}</span>
    </div>
    <span class="clearCompleted" @click='clearAllCompleted'>clear completed</span>
  </div>  
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    clearAllCompleted() {
      this.$emit('clearAllCompleted')
    },
    toggleFilter(state) {
      this.$emit('toggleFilter', state);
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tabs{
    position: relative 
    height: 40px;
  }
  .showItemsNum{
    position: absolute;
    bottom: 2px;
    left: 10px;
    border:none; 
  }
  .clearCompleted {
    position: absolute;
    border: 1px solid #999;
    border-radius: 4px;
    padding:6px 10px;
    right: 10px;
    bottom: 2px;
    cursor: pointer;
     box-shadow: 0 0 1px rgba(0,0,0,0.5);
     background-color #aaa
    &:hover{
        border-color: #666;
        background-color #ccc  
    }
  }
  .state-operator{
    text-align:center;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%) 
    -webkit-transform: translate(-50%, -50%)
    -moz-transform: translate(-50%, -50%)
    span{
      vertical-align:middle;
      margin-left: 4px;
      border: 1px solid #999;
      border-radius: 4px;
      box-shadow: 0 0 1px rgba(0,0,0,0.5)
      padding: 4px 8px;
      cursor: pointer;
      background-color #aaa
      &:hover{
        border-color: #666;
        background-color #ccc; 
      };
      &.selected{
        border-color: #666;
        background-color #ccc;
      }
    }
  }

</style>
