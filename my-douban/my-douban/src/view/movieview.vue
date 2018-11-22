<template>
    <div class="movieview">
        <div class="movie_head">
            <scroll title="影院热映" type="hasCover" :items="hotMovies"></scroll>
           <scroll title="免费在线观影" type="hasCover" :items="newMovies"></scroll>
           <scroll title="新片速递" type="hasCover" :items="topMovies"></scroll>
            <scroll title="发现好电影" type="onlyString" :items="movieTags"></scroll>
        </div>
        <type></type>
        <download></download>
    </div>
</template>
<script>
import scroll from '../components/movie_scroll'
import type from '../components/type'
import download from '../components/downLoad'
import { mapState } from 'vuex';
export default {
    name:'movieview',
    components:{scroll,type,download},
    created(){
        this.getMovies()
    },
    computed:{
        ...mapState({
            hotMovies:state=>state.movie.hotMovies,
            newMovies:state=>state.movie.newMovies,
            topMovies:state=>state.movie.topMovies,
             movieTags:state=>state.movie.movieTags
        })
    },
    methods:{
        getMovies(){
            this.$store.dispatch('gethotMovies')
             this.$store.dispatch('getnewMovies')
              this.$store.dispatch('gettopMovies')
        }
    }
}
</script>
<style lang="scss" scoped>
    .movie_head{
        padding-top: 2rem;
    }
</style>
