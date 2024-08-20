<template>
    <div>
      <h1>Video 페이지입니다!</h1>
      <div class="container">
        <p>{{ message }}</p>
        <div class="video-grid">
          <div 
            class="video-item" 
            v-for="item in items" 
            :key="item.no">
            <iframe 
              width="100%" 
              height="200" 
              :src="getVideoUrl(item.videoId)" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
            <!-- <a :href="getVideoUrl(item.videoId)" target="_blank" class="video-title"> -->
            <a :href="`https://www.youtube.com/watch?v=${item.videoId}`" target="_blank" class="video-title">
              {{ item.title }}
            </a>
            <!-- <p class="video-title">{{ item.title }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Video',
    data() {
      return {
        message: '※データをテーブル表示する',
        items: [
            { no: '1', videoId: 'PWOwNHOJHyA', title: '온 세상이 리선족' },
            { no: '2', videoId: 'DYbt8rmJT40', title: '다 해줬잖아' },
            { no: '3', videoId: 'bj6XWGKKx60', title: '쌀숭이' },
            { no: '4', videoId: 'cYRkZmBuDqI', title: '바로 리부트 정상화' },
            { no: '5', videoId: 'S8_DpXsaLKU', title: '[뮤지컬]신창섭' },
            { no: '6', videoId: 'EslXg6BaUnc', title: '김창섭의 건드림' },
            { no: '7', videoId: 'hfGrn0yV9Dc', title: '돈좀 써줘' },
            { no: '8', videoId: 'd7v9LP6Icq0', title: 'Video Title 8' }
          // 추가 항목
        ]
      }
    },
    methods: {
      getVideoUrl(videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .video-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* 각 아이템 사이의 간격 */
  }
  
  .video-item {
    flex: 1 1 calc(25% - 20px); /* 4개씩 배치하기 위한 설정 */
    box-sizing: border-box;
  }
  
  .video-item iframe {
    width: 100%;
    height: 200px;
  }
  
  .video-title {
    text-align: center;
    margin-top: 8px;
  }
  </style>
  