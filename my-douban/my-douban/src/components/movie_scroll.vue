<template>
    <div class="movie_scroll">
        <div class="movie_scroll_head">
            <p class="scroll_head_title" v-html="title">
            </p>
            <p class="scroll_more">
                更多
            </p>
        </div>
        <div class="content">
            <div class="content_items">
                <ul class="hascover" v-if="type==='hasCover'">
                  <router-link to="movieview/subject">
                      <li v-for="(m,index) in items" v-if="index<=6" :key="index">
                        <img :src="m.images.small" alt="">
                        <p class="item_title" v-html="m.title+'-'+m.year"></p>
                        <rating :rat="m.rating.average">
                        </rating>
                    </li>
                  </router-link>
                  
                </ul>
                <ul class="onlyString" v-if="type === 'onlyString'">
                    <li v-for="(item,index) in items" :key = "index">
                        <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
import rating from "./Rating";
export default {
  name: "Scroll",
  props: ["items", "type", "title"],
  components: { rating },
  data() {
    return {
      ratingnum: {
        num: 8.6
      }
    };
  }
};
</script>
<style lang="scss" scope>
.movie_scroll_head {
  margin-top: 0.5rem;
  width: 94%;
  display: flex;
  justify-content: space-between;
  margin-left: 3%;
  font-size: 0.8rem;
  line-height: 1.8rem;
  .scroll_more {
    color: #42bd56;
    font-size: 0.7rem;
  }
}
.content_items {
  width: 96%;
}
.hascover {
  margin-left: 0.5rem;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 0.5rem;
  li {
    text-align: center;
    width: 5rem;
    margin-left: 0.2rem;
    display: inline-block;
    .item_title {
      text-align: center;
      margin-top: 0.3rem;
    }
    img {
      margin-top: 0.3rem;
      height: 7rem;
    }
  }
}
.onlyString {
  overflow-x: auto;
  white-space: nowrap;
  margin: 0.8rem 0;
  margin-left: 0.8rem;
  padding-bottom: 0.5rem;
  li {
    display: inline-block;
    padding: 0.4rem;
    margin-left: 0.5rem;
    font-size: 0.6rem;
    border: 1px solid;
    border-color: rgb(255, 172, 45);
  }
}
</style>
