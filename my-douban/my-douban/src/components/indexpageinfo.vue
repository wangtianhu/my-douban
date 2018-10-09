<template>
    <div class="indexpageinfo" >
        <div class="every-item" v-for="(item,index) in items" :key="index">
           <div class="itemmain">
                <div class="itemleft">
                <h2>{{item.title}}</h2>
                <p>{{item.content | newcontent}}</p>
            </div>
            <div class="itemright">
                <img :src="item.image" alt="">
            </div>
           </div>
           <div class="itembottom">
               <p class="auto">by<span>{{  hehe | shortname}}</span></p>
               <p class="tag">本活动来自于栏目<span>{{item.category_name}}</span></p>
           </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "indexpageinfo",
  props:{
      items: {
      type: Array,
      required: true
    }
  },
  data(){
      return {
          hehe:'杰克吗哈哈哈'
      }
  },
//   watch:{
//       items:function(){
//           return this.hehe = this.items;
//           console.log(hehe);
          
//       }
//   },
  filters:{
      shortname(val){
          if(val.length>4){
              return val.slice(0,2)
          }
      },
      newcontent(val){
          return val.replace(/<.*?>/g,'').slice(0,50);
      }
  }
};
</script>
<style lang="scss" scoped>
.indexpageinfo {
  width: 100%;
  .every-item {
    width: 100%;
    padding: 0 5%;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    border-bottom: 1px #ccc solid;
    box-sizing: border-box;
    .itemmain {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .itemleft{
          width: 70%;
          h2 {
        font-size: 0.7rem;
        font-weight: 400;
      }
      p {
        padding:1%;
        font-size: 0.4rem;
        color: #aaa;
      }
      }
      .itemright{
          width: 25%;
      }
      
    }
    .itembottom{
        display: flex;
        justify-content: space-between;
    }
  }
}
</style>
