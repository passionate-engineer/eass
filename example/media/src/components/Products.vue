<template>
  <div id="works">
    <div class="contents">
      <div class="wrap">
        <section>
          <h2 class="section-title"><span class="text-color-accent">P</span>roducts.</h2>
          <div class="work-list-container">
            <SlideProducts v-if="$store.getters.hasSiteinfo" :products="$store.getters.siteinfo.products" />
          </div>
        </section>
      </div>
    </div>
    <div class="background-image"></div>
  </div>
</template>

<script>
import SlideProducts from './SlideProducts.vue'

export default {
  name: 'Products',
  components: {
    SlideProducts
  },
  props: {
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_works.scss";
</style>
