<template>
  <div class="wrap-cont5">
    <div class="container container-objects-accept">
      <h2 class="center">Обьекты, которые мы сдали</h2>
      <div class="div-line"></div>
      <div class="block-slider">
        <div class="div-a-link">
          <a class="a-link" href="/projects/">посмотреть все объекты </a>
        </div>
        <div class="block-slider">
          <div class="slider-cont">
            <div class="block-accept-elem-slider">
              <a
                class="swiper-button-prev swiper-button-prev1"
                @click="prevSlider"
              ></a>
              <a
                class="swiper-button-next swiper-button-next1"
                @click="nextSlider"
              ></a>
              <swiper
                :modules="modules"
                :slides-per-view="4"
                :space-between="20"
                navigation
                :loop="true"
                rewind="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                class="mainSlider"
                :breakpoints="{
                  100: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1440: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }"
              >
                <template v-for="(elem, index) in projecData.projData">
                  <swiper-slide>
                    <div class="accept-slider">
                      <div class="block-elem">
                        <div class="div-img">
                          <client-only>
                            <nuxt-img
                              quality="80"
                              height="300"
                              draggable="false"
                              :src="
                                elem.previewImage === elem.sourceImage[0] &&
                                elem.previewImage
                              "
                              @click="
                            () => {
                              this.elemModal = projecData.projData[index];
                              showModal();
                              console.log(elem);
                            }
                          "
                              alt="Фотография обьекта"
                            />
                          </client-only>
                        </div>
                        <div class="title-text">
                          {{ elem.sourceName }}
                        </div>
                        <div class="title-desc">
                          {{ elem.specDesc }}
                        </div>
                        <div class="div-link">
                          <a
                            @click="
                              () => {
                                this.elemModal = projecData.projData[index];
                                showModal();
                              }
                            "
                            class="btn btn-cube"
                            >Подбробнее</a
                          >
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>
                </template>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <div v-show="isModalVisible">
        <Modal
          @close="closeModal"
          class="modal-no-header modal-no-footer modal-projects"
        >
          <template v-slot:body>
            <template v-if="elemModal !== undefined">
              <div id="modal-objects">
                <div class="slider-modal">
                  <div class="dt1">
                    <div class="block-img">
                      <div class="swiper swiper-modal">
                        <div class="swiper-wrapper">
                          <template v-for="elemImg in elemModal.sourceImage">
                            <div class="swiper-slide">
                              <client-only>
                                <nuxt-img
                                  :src="elemImg"
                                  quality="80"
                                  height="300"
                                  alt="Картинка проекта"
                                />
                              </client-only>
                            </div>
                          </template>
                        </div>
                        <a class="swiper-button-prev swiper-button-prev2"></a>
                        <a class="swiper-button-next swiper-button-next2"></a>
                      </div>
                    </div>
                  </div>
                  <div class="dt2">
                    <div class="block-title">
                      <h1 class="mb0">{{ elemModal.sourceName }}</h1>
                    </div>
                    <div class="block-desc">
                      {{ elemModal.shortDesc }}
                    </div>
                    <div class="full-desc">
                      {{ elemModal.completeWork }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./../elements/modalElement.vue";

// import Swiper core and required modules
import { A11y, Navigation } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Swiper2 from "swiper/bundle";

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
      projecData: jsonData,
      isModalVisible: false,
      elemModal: {},
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          771: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      },
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
      loop: true;
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
    const swiperUpdate = () => {
      swiperInstance.value.update();
      // console.log('swiperInstanceUpdate')
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [A11y, Navigation],
    };
  },
  methods: {
    // nextSlider(){
    //   let next = document.querySelectorAll('.mainSlider .swiper-button-next')
    //   next[next.length - 1].click();
    // },
    // prevSlider(){
    //   let prev = document.querySelectorAll('.mainSlider .swiper-button-prev')
    //   prev[prev.length - 1].click();
    // },
    nextSlider() {
      document
        .querySelector(".block-accept-elem-slider .swiper .swiper-button-next")
        .click();
    },
    prevSlider() {
      document
        .querySelector(".block-accept-elem-slider .swiper .swiper-button-prev")
        .click();
    },
    nextSliderModal() {
      const swiper = document.querySelector(".swiper-modal").swiper;
      swiper.slideNext();
    },
    prevSliderModal() {
      const swiper = document.querySelector(".swiper-modal").swiper;
      swiper.slideNext();
    },
    showModal() {
      this.isModalVisible = true;
    },
    showModal2() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.elemModal = {};
    },
    starting() {
      const btnMass = document.querySelectorAll(
        ".accept-slider .div-link .btn"
      );
      const btnMass2 = document.querySelectorAll(".accept-slider .div-img");
      btnMass.forEach((element) => {
        element.addEventListener("click", function () {
          // document.querySelector("#modal-objects").innerHTML = "";
          // document.querySelector("#modal-objects").prepend(this.nextSibling.firstChild.cloneNode(true));
          const swiperTime = new Swiper2(".swiper-modal", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      });
      btnMass2.forEach((element) => {
        element.addEventListener("click", function () {
          // document.querySelector("#modal-objects").innerHTML = "";
          // document.querySelector("#modal-objects").prepend(this.nextSibling.nextSibling.nextSibling.lastChild.lastChild.firstChild.cloneNode(true));
          const swiperTime = new Swiper2(".swiper-modal", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      });
    },
  },
  mounted() {
    this.starting();
  },
};
</script>
