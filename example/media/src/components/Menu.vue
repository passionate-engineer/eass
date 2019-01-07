<template>
  <div class="menu-container js-menu-container">
    <h1 class="site-logo">
      <a href="#"><img src="../assets/logo.png" alt="1Day Release"></a>
    </h1>
    <div class="menu text-uppercase">
      <a class="menu-button js-menu-toggle" href="" v-on:click.prevent="isOpen=!isOpen" v-bind:class='{isOpen:isOpen}'>
        <span class="menu-button-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="menu-button-text">Menu</span>
      </a>
      <nav>
        <ul class="menu-list text-uppercase js-menu-item">
          <li><a class="js-page-scroll" href="#about">About</a></li>
          <li><a class="js-page-scroll" href="#activities">Activities<br>Records</a></li>
          <li><a class="js-page-scroll" href="#works">Works</a></li>
          <li><a class="js-page-scroll" href="#members">Members</a></li>
          <li><a class="js-page-scroll" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="cover sp"></div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
  },
  data: {
    isOpen: false,
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_menu.scss";
</style>