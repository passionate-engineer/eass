<template>
  <div>
    <Header />
    <Main>
      <About />
      <Contacts />
    </Main>
    <Footer />
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
