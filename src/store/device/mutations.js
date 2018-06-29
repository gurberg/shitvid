import _ from 'lodash'

// // // //

// Device Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  collection (state, collection) {
    state.collection = collection
  },
  current (state, attributes) {
    state.current = attributes
  },
  add (state, device) {
    // Finds a device currently in the collection that matches
    // TODO - rename `serialNumber` to `id`?
    // let trackedDevice = _.find(state.collection, { serialNumber: device.serialNumber })
    let trackedDevice = _.find(state.collection, { id: device.id })

    // Adds the device unless a tracked device is already present
    if (!trackedDevice) { state.collection.push(device) }
  },
  remove (state, device) {
    // Filters state.collection to remove the device with the matching serial number
    // state.collection = _.filter(state.collection, (d) => { return d.serialNumber !== device.serialNumber })
    state.collection = _.filter(state.collection, (d) => { return d.id !== device.id })
  },
  selectedDevice (state, device) {
    state.selectedDevice = device
  },
  selectedKey (state, key) {
    state.selectedKey = key
  },
  clearSelectedDevice (state) {
    state.selectedDevice = {}
  },
  clearSelectedKey (state) {
    state.selectedKey = {}
  },
  selectedKeyWorkflow (state, workflow) {
    state.selectedKeyWorkflow = _.cloneDeep(workflow)
  }
}

// // // //

export default mutations
