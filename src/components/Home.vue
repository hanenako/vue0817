<!-- src/components/Home.vue -->
<template>
  <div id="app">
    <h1>메인 페이지에 오신 것을 환영합니다!</h1>
    <Slider />
  </div>
</template>

<script>
import Slider from './Slider.vue';

export default {
  name: 'Home',
  components: {
    Slider
  }
}
</script>

<style>
  body {
    margin:0;
  }
</style>