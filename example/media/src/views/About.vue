<template>
  <div class="about">
    <!--
    <Header />
    <Main>
      <About />
      <Contacts />
    </Main>
    -->
    <Footer />
    <img class="back" src="http://passionate-file-manager.s3-website-ap-northeast-1.amazonaws.com/eass/footer.png">
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import Contacts from '@/components/Contacts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Main,
    About,
    Contacts,
    Footer
  }
}
</script>

<style scope lang="scss">
.back {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.4;
  margin-top: -18px;
}
</style>
