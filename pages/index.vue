<template>
  <blockHeader @openModal="visibleModal"></blockHeader>
  <sliderHeader></sliderHeader>
  <blockFloatDotUp></blockFloatDotUp>
  <block1 id="objects-work"></block1>
  <block2 @openModal="visibleModal"></block2>
  <block3 id="priemush-work"></block3>
  <blockFormCallbackPhone></blockFormCallbackPhone>

  <blockSliderProjAccept id="objects-accept"></blockSliderProjAccept>

  <blockSliderDealers id="dealers-work"></blockSliderDealers>

  <blockReadyObjects id="block-contact"></blockReadyObjects>
  <blockModalEngeneer ref="modalVisible"></blockModalEngeneer>
  <blockFooter @openModal="visibleModal"></blockFooter>
</template>

<style lang="scss"></style>

<script>
import Modal from "../elements/modalElement.vue";
import mainPage from "../components/mainPage.vue";
import blockFloatDotUp from "../components/blockDotFloatUp.vue";
import blockProcessWork from "../components/blockProcessWork.vue";
import blockAdvantageComp from "../components/mainPageComponents/blockAdvantageComp.vue";
import blockFormCallbackPhone from "../components/blockFormCallbackPhone.vue";
import blockSliderProjAccept from "../components/blockSliderProjAccept.vue";
import blockSliderDealers from "../components/blockSliderDealers.vue";
import blockReadyObject from "../components/blockReadyObjects.vue";
import sliderHeader from "../components/mainPageComponents/SliderHeader.vue";
import blockHeader from "../components/blockHeader.vue";
import blockModalEngeneer from "../components/blockModalEngeneer.vue";
import blockFooter from "../components/blockFooter.vue";

export default {
  name: "layout",
  components: {
    Modal,
    block1: mainPage,
    block2: blockProcessWork,
    block3: blockAdvantageComp,
    blockFormCallbackPhone: blockFormCallbackPhone,
    blockSliderProjAccept: blockSliderProjAccept,
    blockSliderDealers: blockSliderDealers,
    blockReadyObjects: blockReadyObject,
    blockModalEngeneer: blockModalEngeneer,
    sliderHeader: sliderHeader,
    blockHeader: blockHeader,
    blockFloatDotUp: blockFloatDotUp,
    blockFooter: blockFooter,
  },
  props: {
    // isModalVisible : String,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  created() {},
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    visibleModal() {
      if (typeof this.$refs !== "undefined") {
        this.$refs.modalVisible.showModal();
      }
    },
  },
  unmounted() {
    console.clear();
  },
  mounted() {
    useSeoMeta({
      title: 'ООО Альпина',
      ogTitle: 'Альпина - климатические системы',
      description: 'специализируется в поставке, монтаже и сервисе систем вентиляции, кондиционирования, холодоснабжения и отопления для коммерческих и промышленных помещений. ',
      ogDescription: 'специализируется в поставке, монтаже и сервисе систем вентиляции, кондиционирования, холодоснабжения и отопления для коммерческих и промышленных помещений. ',
      ogImage: '/images/favicon.ico',
      twitterCard: 'summary_large_image',
    })
  }
};
</script>
