<template>
    <div class="type">
        <h2>分类浏览</h2>
        <ul>
            <li v-for="m in items">
                <a :href="baseUri+m.href">{{m.title}}</a>
                <span>></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "type",
  data() {
    return {
      baseUri: "https://m.douban.com/",
      items: [
        {
          title: "经典",
          href: "movie/classic"
        },
        {
          title: "冷门佳片",
          href: "movie/underrated"
        },
        {
          title: "豆瓣高分",
          href: "movie/doubantop"
        },
        {
          title: "动作",
          href: "movie/action"
        },
        {
          title: "喜剧",
          href: "movie/comedy"
        },
        {
          title: "爱情",
          href: "movie/love"
        },
        {
          title: "悬疑",
          href: "movie/mystery"
        },
        {
          title: "恐怖",
          href: "movie/horror"
        },
        {
          title: "科幻",
          href: "movie/scifi"
        },
        {
          title: "治愈",
          href: "movie/sweet"
        },
        {
          title: "文艺",
          href: "movie/artfilm"
        },
        {
          title: "成长",
          href: "movie/youth"
        },
        {
          title: "动画",
          href: "movie/animation"
        },
        {
          title: "华语",
          href: "movie/chinese"
        },
        {
          title: "欧美",
          href: "movie/western"
        },
        {
          title: "韩国",
          href: "movie/korean"
        },
        {
          title: "日本",
          href: "movie/japanese"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.type {
  width: 96%;
  margin-left: 2%;
  h2 {
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 49.5%;
      padding: 0.5rem 0;
      border-top: 1px solid #ccc;
      font-size: 0.6rem;
      text-align: center;
      display: flex;
      justify-content: space-around;
      color: #ccc;
      a {
        color: #42bd56;
      }
    }
    li:nth-child(2n + 1) {
      border-right: 1px solid #ccc;
    }
  }
}
</style>
