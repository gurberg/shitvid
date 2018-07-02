import _ from 'lodash'
import { DEFAULT_JOB } from './constants'

export default {
  queue: [],
  new_job: _.cloneDeep(DEFAULT_JOB)
}
