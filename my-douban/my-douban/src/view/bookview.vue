<template>
    <div class="bookview">
        <div class="father">
        <h3>这里是父组件</h3>
        <div class="pic">

        </div>
         <div class="pop">

        </div>
        <div class="mixinTest">

        </div>
        <!-- <child> -->
            <!-- <div class="tmpl">
                匿名插槽
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
              <span>菜单4</span>
              <span>菜单5</span>
              <span>菜单6</span>
            </div> -->
            <!-- <div class="tmpl" slot="up">
                具名插槽
                <span>菜单1</span>
                <span>菜单2</span>
                <span>菜单3</span>
                <span>菜单4</span>
                <span>菜单5</span>
                <span>菜单6</span>
            </div>
            <div class="tmpl" slot="down">
                <template v-for="(item,index) in arrA">
                  <span>{{item.name}}</span>
                </template>
            </div>
            <div class="tmpl">
                <span>菜单->1</span>
                <span>菜单->2</span>
                <span>菜单->3</span>
                <span>菜单->4</span>
                <span>菜单->5</span>
                <span>菜单->6</span>
            </div> -->
                <!-- <template slot-scope="user">
                    <div class="tmpl">
                    <span v-for="item in user.data">{{item}}</span>
                    </div>
                </template> -->

        <!-- </child> -->
        <child>
      <template slot-scope="user">
        <div class="tmpl">
          <span v-for="item in user.data">{{item}}</span>
        </div>
      </template>
 
    </child>
 
    <!--第二次使用：用列表展示数据-->
    <child>
      <template slot-scope="user">
        <ul>
          <li v-for="item in user.data">{{item}}</li>
        </ul>
      </template>
 
    </child>
 
    <!--第三次使用：直接显示数据-->
    <child>
      <template slot-scope="user">
       {{user.data}}
      </template>
 
    </child>
 
    <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
    <child>
      我就是模板
    </child>

    </div>
    </div>
</template>
<script>
import child from "../components/child";
export default {
  name: "bookview",
  components: {
    child
  },
  data() {
    return {
      arrA: [
        { name: "1111111" },
        { name: "222222" },
        { name: "3333333" },
        { name: "4444444" },
        { name: "5555555" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
    @import '../layout/css/pop';
    @import '../layout/css/mixin';
// @bgColor:#ffffff;less 定义变量
$bgColor: #f90;
$Color: #000000;
$width: 50%;
.father {
  padding-top: 108px;
  color: $bgColor;
  width: $width;
  // &相当于当前类名
  &:hover {
    color: $Color;
    border: 1px solid $bgColor;
  }
  &:before {
    content: "台词：-";
    // background-color: yellow;
    // color: red;
    // font-weight: bold;
  }
    &:after {
    content: "我结束了-";
    // background-color: yellow;
    // color: red;
    // font-weight: bold;
  }
}
.pic{
    width: 100px;
    height: 100px;
    // background: {
    //     image:url('http://img.cmvideo.cn:8080/publish/noms/2019/05/23/34118.jpg');
    //     size: 100px 100px;
    // }
}
.mixinTest{
    @include popBg;
}
</style>
