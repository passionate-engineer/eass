<template>
  <div id="members">
    <Scrollama @step-enter="({ el }) => (onDisplay = true)">
      <div class="contents" :class="{ active: onDisplay }">
        <div class="wrap">
          <section>
            <h2 class="section-title"><span class="first-letter">M</span>
            <span class="decoration-line">
              <span></span>
              <span></span>
              <span></span>
            </span>embers
            <span class="text-color-accent">.</span></h2>
            <ul class="member-list" v-if="$store.getters.hasSiteinfo">
              <li v-for="member in $store.getters.siteinfo.members" :key="member.name">
                <Member :member="member" />
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Scrollama @step-progress="scrollHandler" :offset="1.2" :progress="true" threshold:="1">
        <div class="background-image step1" data-step="a" :style="{ opacity: bgOpacity }"></div>
      </Scrollama>
    </Scrollama>
  </div>
</template>

<script>
import Member from './Member.vue'
import Scrollama from 'vue-scrollama'

export default {
  name: 'Members',
  components: {
    Member,
    Scrollama
  },
  props: {
  },
  data () {
    return {
      bgOpacity: 0,
      onDisplay: false
    }
  },
  methods: {
    scrollHandler (progress) {
      this.bgOpacity = progress.progress
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/components/_member.scss";
</style>
