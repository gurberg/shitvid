<template>
  <b-row class="justify-content-center mt-4">
    <b-card class='bg-dark text-light border-light'>

      <div class="row">
        <!-- Queue -->
        <b-col md="6">
          <JobForm :new_job="new_job" />
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
import { mapGetters } from 'vuex'
import JobForm from './JobForm'
import Promise from 'bluebird'

// TODO - move somewhere else such that this only runs while in browser-development
window.process = {
  cwd () {
    return '/home/aeksco/Desktop'
  }
}

export default {
  name: 'dashboard',
  components: {
    JobForm
  },
  computed: mapGetters({
    queue: 'video/queue',
    new_job: 'video/new_job'
  }),
  methods: {
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
          o: outputFilename,
          logs: [],
          status: 'QUEUED'
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
            // this.logs.push(data)
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

