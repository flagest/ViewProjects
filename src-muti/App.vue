<template>

  <mt-button type="primary" @click.natvie="handleClick"
             style="width：100%">Test</mt-button>
</template>
<script>


  export default {
    methods: {
      handleClick() {
        Toast('提示信息')

      }
    }
  }

</script>
<style>

</style>
