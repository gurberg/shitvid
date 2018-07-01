<template>
  <b-row class="justify-content-center mt-4">
    <b-card class='bg-dark text-light border-light'>

      <div class="row">
        <!-- Queue -->
        <b-col md="6">
          <b-form>

          <p class="lead mb-0">Video Selection</p>
          <hr>

          <b-form-group
            label="File input"
            label-for="fileInput"
            :label-cols="3"
            :horizontal="true">
              <!-- <b-form-file id="fileInput" :plain="true" @change="onUpload($event)" /></b-form-file> -->
              <p class="le">adshakjs</p>
              <input type="file" name="upload"  @change="onUpload($event)">
          </b-form-group>

          <hr>
          <p class="lead mb-0">Compression Settings</p>
          <hr>

          <b-form-group
            label="Small"
            label-for="basicName"
            :label-cols="3"
            :horizontal="true">
            <b-row>
              <b-col lg="5">
                <b-form-input id="basicName" type="text" placeholder="640" v-model="new_job.small_x"></b-form-input>
              </b-col>

              <b-col lg="2" class='d-flex align-items-center justify-content-center'>
                <i class="fa fa-times fa-lg"></i>
              </b-col>

              <b-col lg="5">
                <b-form-input id="basicName" type="text" placeholder="360" v-model="new_job.small_y"></b-form-input>
              </b-col>

            </b-row>
          </b-form-group>

          <b-form-group
            label="Large"
            label-for="basicName"
            :label-cols="3"
            :horizontal="true">
            <b-row>
              <b-col lg="5">
                <b-form-input id="basicName" type="text" placeholder="1280" v-model="new_job.large_x"></b-form-input>
              </b-col>

              <b-col lg="2" class='d-flex align-items-center justify-content-center'>
                <i class="fa fa-times fa-lg"></i>
              </b-col>

              <b-col lg="5">
                <b-form-input id="basicName" type="text" placeholder="720" v-model="new_job.large_y"></b-form-input>
              </b-col>

            </b-row>
          </b-form-group>

          <b-form-group
            label="Generations"
            label-for="basicName"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicName" placeholder="50" type="number" v-model="new_job.generations"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Save Settings"
            label-for="basicSelect"
            :label-cols="3"
            :horizontal="true">
            <select class="form-control" v-model="new_job.save_settings">
              <option value="SAVE_ALL">Save All</option>
              <option value="SAVE_EVERY_10">Save every 10</option>
              <option value="SAVE_EVERY_25">Save every 25</option>
              <option value="SAVE_EVERY_50">Save every 50</option>
              <option value="SAVE_ONLY_LAST">Only Last</option>
            </select>
          </b-form-group>

          <div slot="footer">
            <b-button type="submit" size="lg" block variant="success" @click="addToQueue()">
              <i class="fa fa-check mr-1"></i>
              Add to Queue
            </b-button>
          </div>

          </b-form>
        </b-col>

        <!-- Queue -->
        <b-col md="6">

          <!-- /////// -->
          <!-- TODO - this should be moved into each queue item -->
          <!-- TODO - add settings page to edit the number of workers available -->
          <pre class="bg-dark text-light">{{ new_job }}</pre>
          <div class="h4 m-0">24.9%</div>
          <div>Processing iteration 24 of 100...</div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">All shitty things come with time :)</small>
          <!-- /////// -->

          <hr>
          <p class="lead mb-0">Queue</p>
          <small class="text-muted">Queue your pretty videos here</small>
          <ul class="list-group mt-2">
            <li class="list-group-item bg-dark border-light" v-for="each in queue">
              <div class="row">
                <div class="col-sm-12">
                  <p class="mb-0">{{ each.inputFile }}</p>
                </div>
              </div>
            </li>
          </ul>
        </b-col>
      </div>

    </b-card>
  </b-row>
</template>

<script>
import _ from 'lodash'
const Promise = require('bluebird')

window.process = {
  cwd () {
    return '/home/aeksco/Desktop'
  }
}

export default {
  name: 'dashboard',
  data () {
    return {
      new_job: {
        inputFile: 'demo.mp4',
        save_settings: 'SAVE_EVERY_10',
        small_x: 540,
        small_y: 360,
        large_x: 1280,
        large_y: 720,
        generations: 10,
        status: 'QUEUED',
        iterations: []
      },
      proto_job: {
        inputFile: 'demo.mp4',
        save_settings: 'SAVE_EVERY_10',
        small_x: 540,
        small_y: 360,
        large_x: 1280,
        large_y: 720,
        generations: 10,
        status: 'QUEUED',
        iterations: []
      },
      current_job: {},
      queue: [],
      logs: [] // TODO - remove this
    }
  },
  methods: {
    onUpload (e) {
      console.log('ON UPLOAD')
      console.log(e)
      let inputFile = e.target.files[0].path // NOTE - doesn't work
      this.new_job.inputFile = inputFile
      // console.log(inputFile)
      // this.makeShitty(inputFile)
    },
    addToQueue () {
      console.log('ADD TO QUEUE')

      // Adds to queue
      this.queue.push(this.new_job)

      // Resets new_job
      this.new_job = _.clone(this.proto_job)
    },
    makeShitty (inputFile) {
      let i = 0
      let originalI = 0
      let limit = 2

      // TODO - iterations should live on the current_job object
      let iterations = []

      let inputFilename
      while (i < limit) {
        if (i === originalI) {
          inputFilename = inputFile
        } else {
          inputFilename = window.process.cwd() + '/iteration_app_' + String(i) + '.mp4'
        }
        let outputFilename = window.process.cwd() + '/iteration_app_' + String(i + 1) + '.mp4'

        // TODO - iteration should encapsulate its own logs
        let iteration = {
          i: inputFilename,
          o: outputFilename
        }

        if (i % 2 === 0) {
          // iteration.scale = '320:180'
          // iteration.scale = '640:360'
          iteration.scale = '100:360'
        } else {
          // iteration.scale = '2560:1440'
          // iteration.scale = '1280:720'
          iteration.scale = '640:360'
        }

        iterations.push(iteration)
        i++
      }

      // // // //

      function processVideo (iteration) {
        console.log('PROCESSING: ', iteration)

        return new Promise((resolve, reject) => {
          let args = ['-i', iteration.i, '-vf', `scale=${iteration.scale}`, iteration.o, '-hide_banner']
          const ls = window.spawn('ffmpeg', args)

          ls.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`)
            this.logs.push(data)
          })

          // ls.stderr.on('data', (data) => {
          //   console.log(`stderr: ${data}`)
          // })

          ls.on('close', (code) => {
            return resolve()
            // console.log(`child process exited with code ${code}`)
          })
        })
      }

      // // // //

      console.log('DO PROMISES HERE')
      console.log(iterations)
      console.log(processVideo)
      window.processVideo = processVideo
      Promise.each(iterations, processVideo).then(() => {
        console.log('DONE')
      })
    }
  }
}
</script>

