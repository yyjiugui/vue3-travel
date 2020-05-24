import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    location: {
      city: localStorage.getItem('location')
        ? JSON.parse(localStorage.getItem('location')).city
        : ''
    }
  },
  mutations: {
    // 用户设置城市
    setLocation(state, { city, district, province, street }) {
      state.location = { city, district, province, street }
      localStorage.setItem(
        'location',
        JSON.stringify({ city, district, province, street })
      )
    }
  },
  actions: {},
  modules: {}
})
