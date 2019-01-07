<template>
  <div id="app">
    <!-- <div id="container" class="is-open"> -->
    <div id="container">
      <router-view/>
      <div class="cover"></div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    setSiteinfo () {
      const branchName = (location.hostname.indexOf('dev') === 0 || location.hostname === 'localhost') ? 'develop' : (location.hostname.indexOf('stg') === 0) ? 'staging' : 'master'
      this.$store.commit('siteinfoBaseUrl', `https://raw.githubusercontent.com/1day-release/1day-release-site/${branchName}/siteinfo/`)
      fetch(`${this.$store.getters.siteinfoBaseUrl}index.json`).then(response => response.json()).then(result => this.$store.commit('siteinfo', result))
    },
    setPageMeta (to) {
      document.title = ((to.meta.title) ? to.meta.title + ' | ' : '') + '1Day Release'
    }
  },
  watch: {
    $route (to, from) {
      this.setPageMeta(to)
    }
  },
  mounted () {
    this.setSiteinfo()
    this.setPageMeta(this.$route)
  }
}
</script>

<style lang="scss">
</style>
