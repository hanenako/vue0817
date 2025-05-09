<!-- src/components/Navigation.vue -->
<template>
  <div class="nav">
    <div v-for="link in links" :key="link.id" class="nav-item">
      <router-link class="item" :to="link.page">
        {{ link.text }}
      </router-link>
      <div v-if="link.subLinks" class="nav-item-drawer">
        <router-link
          v-for="subLink in link.subLinks"
          :key="subLink.id"
          :to="subLink.page">
          {{ subLink.text }}
        </router-link>
      </div>
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
        {
          id: 1,
          text: "Introduce",
          page: "/introduce",
          subLinks: [
            { id: 0, text: 'Site', page: '/introduce/IntroSite' }
          ]
        },
        { id: 2, text: "신창섭 노래모음", page: "/video" },
        { id: 3, text: "SwiperTest", page: "/Swipertest" }
      ]
    }
  }
}
</script>

<style>
.nav {
  display: flex;
  justify-content: center;
  align-items: center; /* 요소들이 세로로도 가운데 정렬되도록 함 */
  background-color: #f8f9fa;
  padding: 5px 10px; /* 위아래 padding을 줄임 */
  margin: 0; /* 불필요한 여백이 없도록 margin을 0으로 설정 */
  width: 100%;
  box-sizing: border-box; /* padding이 width에 포함되도록 함 */
}
.nav-item {
  position: relative;
  z-index: 10;
  margin: 0; /* 불필요한 margin 제거 */
  padding: 0; /* 불필요한 padding 제거 */
}
.nav .item {
  margin-right: 15px;
  font-size: 18px;
  line-height: 1.5; /* 텍스트의 줄 간격을 적절히 조절 */
  color: #007bff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.nav .item:hover {
  text-decoration: underline;
  background-color: #007bff;
  color: #fff;
}
/* 드롭다운 메뉴 */
.nav-item-drawer {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 20;
  border-radius: 5px;
  padding: 10px;
  min-width: 150px;
}
/* 드롭다운 메뉴 링크 */
.nav-item-drawer a {
  display: block;
  text-align: left;
  padding: 8px 12px;
  color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.nav-item-drawer a:hover {
  background-color: #007bff;
  color: #fff;
}
.nav-item:hover .nav-item-drawer {
  display: block;
}
</style>