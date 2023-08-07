<template>
  <div class="wrap-cont1">
    <div class="container">
      <h2 class="center">Объекты с которыми мы работаем</h2>
      <div class="div-line"></div>
      <div class="block-projects">
      <template v-for="(elem, index) in projData.projectsWithWork.projData">
        <div class="elem-modal-preview">
          <div class="div-img">
            <nuxt-img draggable="false" width="400" height="250" :src="elem.sourceImage" alt=""/>
          </div>
          <div class="float-text">
            {{ elem.sourceName }}
          </div>
        </div>
        </template>
      </div>
    </div>
    <div class="cont-arrow arrow-rotate">
      <div class="arrow-down link-proc-work">
        <div class="r1"></div>
        <div class="r2"></div>
        <div class="r3"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import elemPrev from './mainPageComponents/elementModalPresentation.vue'
  import jsonData from '../src/data.json'
  export default {
    components: {
      "elem-prev": elemPrev,
    },
    data() {
      return{
        projData : jsonData
      }
    },
    methods:{

    }
  }
</script>
<styles>

</styles>