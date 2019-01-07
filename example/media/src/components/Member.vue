<template>
  <div class="member">
    <div class="member-img clearfix">
      <img v-bind:src="member.image" alt="" class="">
    </div>
      <vue-typer
        class="member-name"
        :text="member.name"
        :repeat='0'>
      </vue-typer>
      <br>
      <vue-typer
        class="member-position"
        :text="member.position"
        :repeat='0'>
      </vue-typer>
    <!-- <p class="member-name">{{ member.name }}</p>
    <p class="member-position">{{ member.position }}</p> -->
    <p class="member-description">{{ member.description }}</p>
  </div>
</template>

<script>
import TypingText from './TypingText.vue'
import { VueTyper } from 'vue-typer'


export default {
  name: 'Member',
  components: {
    TypingText,
    'vue-typer': VueTyper

  },
  props: ['member']
}
</script>

<style scoped lang="scss">

/deep/ .vue-typer{
  &.member-name .custom.char.typed{
    color: #fff;
  }
  &.member-position .custom.char.typed{
    color: #585858;
  }
}
#members .contents.active .member .member-img img{
      bottom: 0;
    }
.member{
  text-align: center;
  .member-name{
    display: block;
    margin-bottom: 10px;
    font-size: 1.4rem;
  }
  .member-position{
    color: #585858;
    font-size: 1.2rem;
  }
  .member-img{
    position: relative;
    overflow: hidden;
    padding-bottom: 100%;
    margin-bottom: 15px;
    background-color: #fff;
    border-radius: 50%;
    &:hover img{
      bottom: 0;
    }
    img{
      border-radius: 50%;
      position: absolute;
      width: 100%;
      bottom: -100%;
      left: 0;
      right: 0;
      vertical-align: bottom;
      transition: all 1s;
    }
  }
}
</style>
