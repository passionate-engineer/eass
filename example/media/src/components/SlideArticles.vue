<template>
  <div>
    <ul class="activity-list js-carousels-list">
      <li class="js-carousels-item" v-for="(article, articleIndex) in articles" :key="articleIndex">
        <a href="" class="activity">
          <time :datetime="article.date">{{article.date || moment('YYYY-MM-DD')}}</time>
          <img :src="article.image" alt="">
          <p class="">{{article.title}}</p>
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
  name: 'SlideArticles',
  props: {
    articles: Array
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_activity.scss";
</style>
