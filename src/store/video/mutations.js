import _ from 'lodash'
import { DEFAULT_JOB } from './constants'

export default {
  queue (state, queue) {
    state.queue = queue
  },
  resetNewJob (state) {
    state.new_job = _.cloneDeep(DEFAULT_JOB)
  }
}
