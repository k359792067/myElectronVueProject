<template>
  <div class="index-bg">
    <div class="swiper-content">
      <swiper :options="swiperOptionContent" ref="swiperContent">
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
    <div class="swiper-navbar">
      <swiper :options="swiperOptionNavbar" ref="swiperNavbar">
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
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        swiperOptionContent: {
          slidesPerView: 3,
          loopedSlides: 7,
          spaceBetween: 30,
          loop: true,
          centeredSlides: true
        },
        swiperOptionNavbar: {
          slidesPerView: 7,
          loopedSlides: 7,
          spaceBetween: 15,
          loop: true,
          centeredSlides: true,
          slideToClickedSlide: true
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