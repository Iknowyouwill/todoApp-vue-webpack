<template>
  <div :class="['todo-item', todo.completed? 'completed': '']">
    <input 
      type="checkbox"
      class='toggle'
      v-model='todo.completed'
    >
    <label>{{todo.content}}</label>
    <button class='destroy' @click='delTodo'></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      require: true
    }
  },
  methods: {
    delTodo: function () {
      this.$emit('del', this.todo.id)
    },
  }
}
</script>

<style lang="stylus" scoped>
.todo-item {
  position relative 
  width 100%
  font-size 20px
  font-family inherit 
  font-weight inherit 
  line-height 40px;
  color inherit 
  border-bottom: 1px solid #666;
  box-shadow: 0px 1px 0px #666;
  &:hover {
      .destroy:after{
        content: 'X';
        color: #000;
      }
    }
  label {
      line-height 1.2em
      transition color 0.4s
      border none
    }
  &.completed {
      label{
        color: #d9d9d9;
        text-decoration: line-through;
      }
    }
}
.toggle{
    text-align: center 
    height: 32px;
    width: 32px;
    position absolute;  
    top 4px;
    left 4px;
    border: none;
    appearance: none;
    outline: none;
    border: 2px solid rgba(0,0,0,0.5)
    border-radius: 100%;
    &:after{
      content '';
    }
    &:checked:after{
      content: '√';
      font-size: 1.8em 
      text-align: center;
      font-weight: 900
    }
  }
.destroy {
    position: absolute;
    top: 0;  
    right: 10px;
    width: 40px;
    height: 100%;
    font-size: 30px;
    color: #cc9a9a;
    transtion: color 0.2s ease-out;
    background-color: transparent ;
    cursor: pointer;
    border:none;
    outline: 0;
    &::-moz-focus-inner{
      border:none
    }
  }
  
</style>

