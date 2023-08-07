<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    const visuality = localStorage.getItem('visuality') || 'version-row'
    localStorage.setItem('visuality', visuality)

    const theme = localStorage.getItem('theme-window') || 'dark-theme'
    localStorage.setItem('theme-window', theme)

    document.querySelector('html').setAttribute('theme', localStorage.getItem('theme-window'));
  }
}
</script>