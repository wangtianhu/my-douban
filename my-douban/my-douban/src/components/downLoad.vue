<template>
    <div class="download">
        <div class="info">
            <img src="../assets/douban-app-logo.png" alt="下载豆瓣">
            <div class="words">
                <p>豆瓣</p>
                <p>我们的精神角落</p>
            </div>
        </div>
        <a href="#">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>
<script>
export default {
  name: "download"
};
</script>
<style lang="scss" scoped>
.download {
  margin: 1rem 0;
  .info {
    width: 50%;
    margin-left: 30%;
    display: flex;
    justify-content: space-between;
    img {
      width: 2.5rem;
      height: 100%;
    }
    .words {
      width: 4rem;
      p:first-child {
        font-size: 1rem;
      }
    }
  }
  a {
    color: #42bd56;
    display: block;
    font-size: 0.6rem;
    text-align: center;
    margin-top: 0.5rem;
  }
}
</style>
