<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>

    </div>
  </div>
</template>
<script>
  import TodoFooter from './components/TodoFooter.vue'
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'

  export default {
    components: {
      TodoFooter,
      TodoHeader,
      TodoList
    },
    data() {
      return {
       /* todos: [
          {title: 'love coding C', complete: false},
          {title: 'love coding C++', complete: true},
          {title: 'love coding java', complete: false}
        ]*/
       todos:JSON.parse(window.localStorage.getItem('tools_key')||'[]')
      }
    },
    watch:{//watch是监视
      todos:{
        deep:true,
        handler:function (value) {
          //将todo最新的值保存到localstorge
          window.localStorage.setItem('tools_key',JSON.stringify(value))
        }

      }

    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      //删除所有todo,并更新todos
      deleteCompleteTodos() {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //全选或者全不选
      selectAllTodos(check) {
        this.forEach(todo => todo.complete = check)
      }
    }

  }

</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
