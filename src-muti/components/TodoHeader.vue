<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
           v-model="title" @keyup.enter="addItem"/>
  </div>
</template>
<script>
  export default {
    props: {
      addTodo: Function

    },
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addItem() {
        //1，校验参数
        const title = this.title.trim()
        if (!title) {
          alert('请输入参数')
          return
        }
        //2，输入对象组装为一个todo
        const todo = {
          title,
          complete: false
        }
        //3，添加todo
        this.addTodo(todo)
        //4，清除数据
        this.title = ''

      }
    }
  }

</script>
<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }

</style>
