<template>
    <nuxt-img
        quality="80"
        height="300"
        draggable="false"
        :src="imageConf[0]"
        alt="Фотография обьекта"
    />
</template>
<script>
export default {
  data() {
    return {
      imageConf:[],
    }
  }
}
</script>