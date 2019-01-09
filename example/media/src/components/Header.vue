<template>
  <header>
    <div class="header-bar">
      <h1 class="logo">
        <a href="javascript:void(0)">
          <img src="https://dariame.jp/wp-content/uploads/2018/12/名称未設定-3@4x.png" alt="">
        </a>
      </h1>
    </div>
    <div class="navigation">
      <div class="navigation-swipe">
        <nav>
          <ul class="category-links">
            <li class="category-link"><a href="javascript:void(0)">Home</a></li>
            <li class="category-link"><a href="javascript:void(0)">狂愛</a></li>
            <li class="category-link"><a href="javascript:void(0)">恋の一方通行</a></li>
            <li class="category-link"><a href="javascript:void(0)">メンタリティ</a></li>
            <li class="category-link"><a href="javascript:void(0)">狂愛</a></li>
            <li class="category-link"><a href="javascript:void(0)">狂愛</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
.header-bar {
  position: relative;
  background: black;
  padding: 15px 10px;
  .logo {
    width: 70px;
  }
}
.navigation {
  overflow: scroll;
  width: 100%;
  .navigation-swipe {
    width: max-content;
    background: #f7f7f7;
    .category-links {
      overflow: hidden;
      padding: 15px 0px;
      .category-link {
        float: left;
        padding: 0px 15px;
        border-right: 1px solid #d8d8d8; 
        font-size: 1.2rem;
        a {
          color: #333;
          text-decoration: none;
        }
        &:last-child {
          border-right: none; 
        }
      }
    }
  }
}
</style>
