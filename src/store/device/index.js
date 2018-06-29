import actions from './actions'
import state from './state'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
