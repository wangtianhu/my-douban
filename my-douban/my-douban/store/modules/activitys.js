import axios from 'axios'

const state = {
  events: [],
  temp: [],
  skip: 3,
  eventItem: {}
}

const mutations = {
  loadMore (state, payload) {
    console.log(666);
    
    state.skip += 3
    state.events = state.events.concat(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

const actions = {
  /**
   * Loading more data
   * skip: 3 default
   * count: 3 default
   */
  loadMore ({commit, state}) { //  /api/v2/event/list?loc=108288&start=' + state.skip + '&count=3
    axios.get('/api/v2/event/list?loc=108288&start=' +
    state.skip + '&count=3')
      .then( (res) => {
        if (res.status==200) {
          commit({
            type: 'loadMore',
            res: res.data.events
          })
        }
        console.log(res)
      })
  },
  /**
   * Getting single event
   * id: event id
   */
  getSingleEvent ({commit, state}, payload) {
    return new Promise((resolve, reject) => {
        axios.get('/api/v2/event/' + payload.id)
        .then((err, res) => {
          if (!err) {
            commit({
              type: 'getSingleEvent',
              res: res
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
