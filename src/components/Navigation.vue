<!-- src/components/Navigation.vue -->
<template>
    <div class="nav">
      <router-link class="item" v-for="route in links" 
                    :key="route.id"
                    :to="route.page">{{ route.text }}</router-link>
      <div>
        <p class="item">{{ dropDown }}</p>
      </div>
      <div align="right" class="searchBar">
        asdasdadzcSSADASSSSSSSSSSSSSSSSSSSSSS
      </div>
    </div>

  </template>
  
  <script>
  export default {
    name: 'Navigation',
    data() { 
      return { 
        links: [
          { id: 0, text: "메인으로", page: "/" },
          { id: 1, text: "First로 가기", page: "/first" }, 
          { id: 2, text: "신창섭 노래모음", page: "/video" },
          { id: 3, text: "SwiperTest", page: "/Swipertest"}
        ],
        dropDown: "asdas"
      }
    }
  }
  </script>
  
  <style>
  .nav {
    display: flex;
    flex-direction: row;
    background-color: #f8f9fa;
    padding: 10px;
  }
  .nav .item {
    margin-right: 15px;
    font-size: 18px;
    color: #007bff;
    text-decoration: none;
  }
  .nav .item:hover {
    text-decoration: underline;
  }
  .nav p.item {
    margin: 0;
  }
  </style>
  