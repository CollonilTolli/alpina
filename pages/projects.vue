<template>
  <div class="wrap-cont4 wrap-cont4-1 div-proj-header">
    <div class="container">
      <div class="div-logo">
        <div class="div-img">
          <a href="/">
            <img class="invert-nuxt-img-white" draggable="false" src="../assets/images/footer-text-logo.svg"  alt=""/>
          </a>
        </div>
        <div class="div-desc">
          Более 100 объектов <br>
          сдали под ключ
        </div>
      </div>
      <div class="float-container float-container2 float-cont3">
        <div @click="changeTheme()" class="float-theme">
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="wrap-cont4 wrap-cont4-1">
    <h2 class="center">Обьекты, которые мы сдали</h2>
    <div class="div-line"></div>
    <div class="mobile-toggle">
      <a @click="changeVision">
        Переключить отображение элементов
      </a>
    </div>
    <div class="container">
      <div class="block-accept-elem-slider block-acc-slider2" :class="{ 'version-row': versionClass == 'version-row'}">
        <div class="items-cont">
          <template  v-for="(elem, index) in projecData.projectsWithWorkSlider.projData">
            <div class="accept-slider">
              <div class="block-elem">
                <div class="div-img" @click="()=>{ this.elemModal = projecData.projectsWithWorkSlider.projData[index] ;showModal(); }">
                    <nuxt-img draggable="false" width="300" height="300" :src="elem.sourceImage[0]" alt="Фотография обьекта"/>
                </div>
                <div class="div-data">
                  <div class="title-text">
                    {{ elem.sourceName }}
                  </div>
                  <div class="title-desc">
                    {{ elem.specDesc }}
                  </div>
                  <div class="div-link">
                    <a @click="()=>{ this.elemModal = projecData.projectsWithWorkSlider.projData[index] ;showModal(); }" class="btn btn-cube">Подбробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </template>
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
                              <nuxt-img
                                  :src="elemImg"
                                  quality="80" height="300"
                                  alt="Картинка проекта"
                              />
                            </div>
                          </template>
                        </div>
                        <a
                            class="swiper-button-prev swiper-button-prev2"
                        ></a>
                        <a
                            class="swiper-button-next swiper-button-next2"
                        ></a>
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
  <blockFooter class="toMainPage"></blockFooter>
</template>
<script>
import Modal from '/elements/modalElement.vue';
import blockFooter from "/components/blockFooter.vue"
import jsonData from "../src/data.json";
import Swiper from "swiper/bundle"

import 'swiper/css';


export default {
  components:{
    "blockFooter": blockFooter,
    Modal,
  },
  data() {
    return {
      projecData : jsonData,
      isModalVisible: false,
      elemModal: {},
      versionClass: typeof window !== 'undefined' && localStorage.getItem('visuality'),
      themeStorage: !true
    }
  },
  methods:{
    showModal(){
      this.isModalVisible = true;
    },
    showModal2() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.elemModal = {};
    },
    starting(){
      const btnMass = document.querySelectorAll('.accept-slider .div-link .btn');
      const btnMass2 = document.querySelectorAll(".accept-slider .div-img");
      btnMass.forEach(element => {
        element.addEventListener("click",function (){
          const swiperTime = new Swiper('.swiper-modal', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        })
      })
      btnMass2.forEach((element) => {
        element.addEventListener("click", function () {
          const swiperTime = new Swiper(".swiper-modal", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      });
      const swiper = new Swiper('.swiper', {
      });
    },
    changeVision(){
      if (typeof window !== 'undefined') {
        if (localStorage.getItem("visuality") === "version-row") {
          document.querySelector('.block-acc-slider2').classList.remove('version-row')
          document.querySelector('.block-acc-slider2').classList.add('version-column')
          localStorage.setItem('visuality', 'version-column')
        } else {
          document.querySelector('.block-acc-slider2').classList.add('version-row')
          document.querySelector('.block-acc-slider2').classList.remove('version-column')
          localStorage.setItem('visuality', 'version-row')
        }
      }
    },
    changeTheme() {
      if (typeof window !== 'undefined') {
        if (localStorage.getItem('theme-window') !== "dark-theme") {
          localStorage.setItem('theme-window', 'dark-theme')
          document.querySelector('.float-theme').classList.toggle('dark-mode')
        } else {
          localStorage.setItem('theme-window', 'white-theme')
          document.querySelector('.float-theme').classList.toggle('dark-mode')
        }
        document.querySelector('html').setAttribute('theme', localStorage.getItem('theme-window'));
      }
    },
    checkTheme(){
      if (localStorage.getItem('theme-window') == "dark-theme"){
        document.querySelectorAll('.float-theme').forEach((el)=>{
          el.classList.toggle('dark-mode')
        })
      }
    }
  },
  mounted() {
    this.starting()
    this.checkTheme()
    if (localStorage.getItem('theme-window') === "white-theme"){
      this.themeStorage = true;
    };
    useSeoMeta({
      title: 'Проекты',
      ogTitle: 'Альпина - Выполненые проекты',
      description: 'Ознакомьтесь с нашими выполнеными проектами',
      ogDescription: 'Ознакомьтесь с нашими выполнеными проектами',
      ogImage: '/images/favicon.ico',
      twitterCard: 'summary_large_image',
    })
  },
}
</script>
<styles>

</styles>