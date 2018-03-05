<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'my_electron_vue_project'
  }
</script>

<style>
  #app {
    height: 100%;
    background-color: #f0f3f6;
    overflow: hidden;
  }

  html,
  body {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    text-align: center;
    background-color: #f0f3f6;
    overflow: hidden;
    /* -webkit-user-select: none; */
  }
</style>