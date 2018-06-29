
// Device Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  current: state => {
    return state.current
  },
  fetching: state => {
    return state.fetching
  },
  selectedDevice: state => {
    return state.selectedDevice
  },
  selectedKey: state => {
    return state.selectedKey
  },
  selectedKeyWorkflow: state => {
    return state.selectedKeyWorkflow
  }
}

export default getters
