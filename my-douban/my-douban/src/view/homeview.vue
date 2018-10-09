<template>
    <div class="pagehome">
        <head-list></head-list>
        <indexpageinfo :items="listItem"></indexpageinfo>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import InfiniteLoading from "vue-infinite-loading";
import HeadList from "../components/HeadList";
import indexpageinfo from "../components/indexpageinfo";
import loading from "../components/Loading";
export default {
  name: "homeview",
  components: {
    HeadList,
    indexpageinfo,
    InfiniteLoading,
    loading
  },
  data() {
    return {
      ietmdata: []
    };
  },
  computed: {
    ...mapState({
      listItem: state => state.activitys.events
    })
  },
  mounted() {},
  methods: {
    ...mapActions(["loadMore"]),
    onInfinite() {
      setTimeout(() => {
        this.loadMore();
        this.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded");
      }, 1000);
    }

    // getData(){
    //   this.$axios.get('/api/v2/event/list?loc=108288&start=3&count=3')
    //   .then((err, res) => {
    //     if (!err) {
    //       commit({
    //         type: 'loadMore',
    //         res: res.body
    //       })
    //     }
    //     console.log(res)
    //   })
    // }
  }
};
</script>
<style>
</style>


