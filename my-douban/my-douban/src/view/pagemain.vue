<template>
    <div class="pagemain">
          <index-head></index-head>
          <router-view></router-view>
    </div>
</template>
<script>
import IndexHead from '../components/Head'
export default {
    name:'pagemain',
    components:{
        IndexHead
    }
}
</script>
<style lang="scss">

</style>
