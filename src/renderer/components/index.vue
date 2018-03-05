<template>
  <div class="index-bg">
    <div class="swiper-navbar">
      <swiper :options="swiperOption">
        <!-- 视差效果 -->
        <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
        <!-- <swiper-slide v-for="slide in swiperSlides" :key="slide">Slide {{ slide }}</swiper-slide> -->
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
        // swiperSlides: [1, 2, 3, 4, 5, 6, 7]
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .login-bg {
    background: url('../assets/img/index-bg.jpg') no-repeat;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url(/static/images/surmon-1.jpg);
  }
</style>