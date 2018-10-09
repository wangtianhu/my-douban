import axios from 'axios'

const state = {
  hotMovies: [],
  newMovies: [],
  topMovies: [],
  movieTags: [
    {
      title: '同时入选IMDB250和豆瓣电影250的电影',
      href: 'https://m.douban.com/doulist/968362/',
      color: '#FFAC2D'
    },
    {
      title: '带你进入不正常的世界',
      href: 'https://m.douban.com/doulist/16002',
      color: '#FF4055'
    },
    {
      title: '用电【影】来祭奠逝去的岁月',
      href: 'https://m.douban.com/doulist/190343',
      color: '#4F9DED'
    },
    {
      title: '女孩们的故事【电影】',
      href: 'https://m.douban.com/doulist/1125971',
      color: '#FFC46C'
    },
    {
      line: true
    },
    {
      title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
      href: 'https://m.douban.com/doulist/4253902',
      color: '#2384E8'
    },
    {
      title: '美国生活面面观',
      href: 'https://m.douban.com/doulist/121326',
      color: '#3BA94D'
    },
    {
      title: '2015终极期待',
      href: 'https://m.douban.com/doulist/37479562',
      color: '#42BD56'
    },
    {
      title: '经典韩国电影——收集100部',
      href: 'https://m.douban.com/doulist/458087',
      color: '#CC3344'
    }
  ]
}

const mutations = {
  gethotMovies(state, payload) {
    state.hotMovies = payload.res
    console.log(1111);
  },
  getnewMovies(state, payload) {
    state.newMovies = payload.res
  },
  gettopMovies(state, payload) {
    state.topMovies = payload.res
  }
}

const actions = {
  gethotMovies({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/v2/movie/in_theaters?count=8')
        .then((res) => {
          console.log(res);
          
          if (res.status==200) {
            commit({
              type: 'gethotMovies',
              res: res.data.subjects
            })
            resolve(res)
            console.log(res);
          }
        })
    })
  },
  getnewMovies({ commit, state }){
    return new Promise((resolve, reject) => {
      axios.get('/api/v2/movie/coming_soon?count=8')
        .then((res) => {
          if (res.status==200) {
            commit({
              type: 'getnewMovies',
              res: res.data.subjects
            })
            resolve(res)
            console.log(res);
          }
        })
    })
  },
  gettopMovies({ commit, state }){
    return new Promise((resolve, reject) => {
      axios.get('/api/v2/movie/top250?count=8')
        .then((res) => {
          if (res.status==200) {
            commit({
              type: 'gettopMovies',
              res: res.data.subjects
            })
            resolve(res)
            console.log(res);
          }
        })
    })
  }

}

export default {
  state,
  mutations,
  actions
}
