<template>
  <div class="index-bg">
    <div class="swiper-content">
      <swiper style="height:100%;width:100%" :options="swiperOptionContent" ref="swiperContent">
        <!-- 视差效果 -->
        <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
        <!-- <swiper-slide v-for="slide in swiperSlides" :key="slide">Slide {{ slide }}</swiper-slide> -->
        <swiper-slide>
          <img class="ani" src="../assets/img/index/building.png"  swiper-animate-effect="bounce"  swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
        </swiper-slide>
        <swiper-slide >
          <img  class="ani" src="../assets/img/index/car.png"  swiper-animate-effect="bounce" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
        </swiper-slide>
        <swiper-slide >
          <img class="ani"  src="../assets/img/index/flag.png"  swiper-animate-effect="bounce" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
        </swiper-slide>
        <swiper-slide >
          <img class="ani" src="../assets/img/index/gonggong.png"  swiper-animate-effect="bounce" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
        </swiper-slide>
        <swiper-slide>
          <img class="ani"  src="../assets/img/index/honor.png"  swiper-animate-effect="bounce" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
        </swiper-slide>
        <swiper-slide>  
          <img class="ani"  src="../assets/img/index/news.png"  swiper-animate-effect="bounce" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
        </swiper-slide>
        <swiper-slide>
          <img class="ani"  src="../assets/img/index/user.png"  swiper-animate-effect="bounce" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="swiper-navbar">
      <swiper style="height:100%;width:100%" :options="swiperOptionNavbar" ref="swiperNavbar">
        <!-- 视差效果 -->
        <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
        <!-- <swiper-slide v-for="slide in swiperSlides" :key="slide">Slide {{ slide }}</swiper-slide> -->
        <swiper-slide>
          <img src="../assets/img/index/building.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/index/car.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/index/flag.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/index/gonggong.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/index/honor.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/index/news.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/index/user.png" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import 'swiper-animate/animate.min.css'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  const animate = require('swiper-animate/swiper.animate1.0.2.min.js')
  export default {
    data () {
      return {
        swiperOptionContent: {
          slidesPerView: 3,
          loopedSlides: 7,
          spaceBetween: 30,
          speed: 1000,
          loop: true,
          centeredSlides: true,
          on: {
            init: function () {
              animate.swiperAnimateCache(this) // 隐藏动画元素
              animate.swiperAnimate(this) // 初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
              animate.swiperAnimate(this) // 每个slide切换结束时也运行当前slide动画
            }
          }
        },
        swiperOptionNavbar: {
          slidesPerView: 7,
          loopedSlides: 7,
          spaceBetween: 15,
          speed: 1000,
          loop: true,
          centeredSlides: true,
          slideToClickedSlide: true,
          on: {
            init: function () {
              animate.swiperAnimateCache(this) // 隐藏动画元素
              animate.swiperAnimate(this) // 初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
              animate.swiperAnimate(this) // 每个slide切换结束时也运行当前slide动画
            }
          }
        }
        // swiperSlides: [1, 2, 3, 4, 5, 6, 7]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted () {
      this.$nextTick(() => {
        const swiperContent = this.$refs.swiperContent.swiper
        console.log(swiperContent)
        const swiperNavbar = this.$refs.swiperNavbar.swiper
        console.log(swiperNavbar)
        swiperContent.controller.control = swiperNavbar
        swiperNavbar.controller.control = swiperContent
      })
    }
  }
</script>

<style scoped>
  .swiper-wrapper {
    transition-timing-function: ease-in-out;
  }
  .swiper-content {
    height: 85%
  }
  .swiper-navbar {
    height: 15%
  }
  .swiper-content .swiper-slide-active img {
    width: 200px;
    height: 200px;
    opacity: 1;
  }
  .swiper-content img {
    width: 100px;
    height: 100px;
    opacity: 0.5;
    position: absolute;
    margin:auto; top: 0;left: 0;right: 0;bottom: 0;
  }
  .swiper-navbar img {
    width: 50px;
    height: 50px;
  }
  .swiper-slide {
    position: relative;
  }
  .index-bg {
    background: url('../assets/img/index/index-bg.png') no-repeat;
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
    background-color: #82eaf1;
    opacity: 0.2;
    background-size: cover;
    background-position: center;
    /* background-image: url(/static/images/surmon-1.jpg); */
  }
</style>