<template>
    <swiper
        :navigation="true"
        :pagination="{clickable: true}"
        :modules="modules"
        :autoplay="autoplay"
        class="mySwiper">
        <swiper-slide v-for="image in images" :key="image.id">
            <img :src="image.url" :alt="image.title" />
        </swiper-slide>
    </swiper>
    <div>
        <img
        class="sinchangseop"
        src="/img/sinchangseop.jpg"
        />

    </div>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from "swiper/vue";

    // Import Swiper styles
    import "swiper/css";
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    // import required modules
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';
    
    export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const images = [
            {
                id: 0,
                url : "/img/image1.png",
                title: "image1"
            },
            {
                id: 1,
                url : "/img/image2.png",
                title: "image2"
            },
            {
                id: 2,
                url : "/img/image3.png",
                title: "image3"
            },
            {
                id: 3,
                url : "/img/image4.png",
                title: "image4"
            },
        ];

        const modules= [Navigation,Pagination,Autoplay];
        const autoplay= {
            delay: 3000, // 3초마다 슬라이드 변경
            disableOnInteraction: false, // 사용자가 슬라이드에 상호작용해도 자동 재생이 계속됨
        };
        const loop = true;

        return {
            modules,
            autoplay,
            loop,
            images,
        };
    },
};
</script>

<style>

.mySwiper {
  width: 900px;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;  /* 이미지에 따라 수직 중앙 정렬 */
}

.swiper-button-next {
  right: 7px;
}

.swiper-button-prev {
  left: 7px;
}

/* 일정한 크기로 이미지를 설정 */
.swiper-image {
  width: auto;  /* 원하는 너비 */
  height: auto; /* 원하는 높이 */
  object-fit: cover; /* 이미지의 비율을 유지하면서 크기에 맞게 자름 */
}
</style>