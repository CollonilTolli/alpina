<template>
  <div class="wrap-cont5 wrap-cont5-1">
    <div class="container container-dealers-accept">
      <h2 class="center">Мы дилеры</h2>
      <div class="div-line"></div>
      <div class="block-slider">
        <div class="slider-cont">
          <!--          <blockSliderDealerElem></blockSliderDealerElem>-->
          <div class="block-dealers-elem-slider">
            <a class="swiper-button-prev" @click="prevSlider"></a>
            <a class="swiper-button-next" @click="nextSlider"></a>
            <swiper
              :modules="modules"
              :slides-per-view="6"
              :space-between="20"
              navigation
              :loop="true"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              :breakpoints="{
                '1440': {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                '1024': {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                '768': {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                '560': {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                '400': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '100': {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }"
            >
              <template v-for="elem in projData">
                <swiper-slide>
                  <div class="dealer-slider">
                    <div class="block-elem listener-click" @click="showModal">
                      <div class="div-img">
                        <client-only>
                          <nuxt-img
                            width="187"
                            quality="80"
                            fit="contain"
                            draggable="false"
                            :src="elem.sourceImage"
                            alt="Фотография дилера"
                          />
                        </client-only>
                      </div>
                      <div style="display: none !important">
                        <div class="dataContent">
                          <client-only>
                            <div class="block-img">
                              <nuxt-img :src="elem.sourceSrc" alt="" />
                            </div>
                          </client-only>
                          <div class="block-title 2">
                            <h1>{{ elem.sourceTitle }}</h1>
                          </div>
                          <div class="block-desc">
                            {{ elem.sourceDesc }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </template>
            </swiper>
          </div>
          <div v-show="isModalVisible">
            <Modal @close="closeModal" class="modal-no-header modal-dealers">
              <template v-slot:body>
                <div id="modal-deal-cont"></div>
              </template>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import blockSliderSliderElem from './mainPageComponents/blockSliderDealersElem.vue'

import Modal from "/elements/modalElement.vue";
// import Swiper core and required modules
import { A11y, Navigation } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import jsonData from "../src/data.json";

// Import Swiper styles
export default {
  data() {
    return {
      isModalVisible: false,
      formSubmited: false,
      projData: jsonData.dealersDataJson.dealersData,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Modal,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
      navigation: {
        nextEl: ".swiper-button-next";
        prevEl: ".swiper-button-prev";
      }
      return;
    };
    const onSlideChange = () => {
      // console.log('slide change');
      return;
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [A11y, Navigation],
    };
  },
  mounted() {
    this.starting();
  },
  methods: {
    nextSlider() {
      document
        .querySelector(".block-dealers-elem-slider .swiper .swiper-button-next")
        .click();
    },
    prevSlider() {
      document
        .querySelector(".block-dealers-elem-slider .swiper .swiper-button-prev")
        .click();
    },
    starting() {
      const btnMass = document.querySelectorAll(".listener-click");
      btnMass.forEach((element) => {
        element.addEventListener("click", function () {
          document.querySelector("#modal-deal-cont").innerHTML = "";
          document
            .querySelector("#modal-deal-cont")
            .prepend(this.lastChild.firstChild.cloneNode(true));
        });
      });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
