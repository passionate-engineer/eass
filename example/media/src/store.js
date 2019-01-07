import Vue from 'vue'
import Vuex from 'vuex'
import mixin from './mixin'

Vue.mixin(mixin)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteinfo: {},
    siteinfoBaseUrl: ''
  },
  getters: {
    hasSiteinfo: state => {
      return !!Object.keys(state.siteinfo).length
    },
    siteinfo: state => {
      return state.siteinfo
    },
    siteinfoBaseUrl: state => {
      return state.siteinfoBaseUrl
    }
  },
  mutations: {
    siteinfo (state, data) {
      console.log(this)
      data.activities.forEach((value, index) => {
        data.activities[index].image = state.siteinfoBaseUrl + 'activities/' + value.date + '-' + this._vm.getKebabCase(value.title) + '/image.jpg'
      })
      data.products.forEach((value, index) => {
        data.products[index].image = state.siteinfoBaseUrl + 'products/' + value.date + '-' + this._vm.getKebabCase(value.title) + '/image.jpg'
      })
      data.members.forEach((value, index) => {
        data.members[index].image = state.siteinfoBaseUrl + 'members/' + this._vm.getKebabCase(value.name) + '.jpg'
      })
      state.siteinfo = data
    },
    siteinfoBaseUrl (state, data) {
      state.siteinfoBaseUrl = data
    }
  },
  actions: {

  }
})
