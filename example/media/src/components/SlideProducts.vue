<template>
  <div>
    <ul class="work-list js-carousels-list">
      <li class="js-carousels-item" v-for="(product, productIndex) in products" :key="productIndex">
        <a class="work" href="">
          <figure>
            <img :src="product.image" alt="">
            <figcaption>{{product.description}} - {{product.title}}</figcaption>
          </figure>
        </a>
      </li>
    </ul>
    <!--
    <div class="pager-container js-carousels-pager">
      <a href="#" class="pager-button is-prev is-disabled"></a>
      <div class="pager">
        <ul class="pager-list clearfix">
          <li></li>
          <li></li>
        </ul>
        <div class="pager-bar" style="left:0;width:50px;"></div>
      </div>
      <a href="#" class="pager-button is-next"></a>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'SlideProducts',
  props: {
    products: Array
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_works.scss";
</style>
