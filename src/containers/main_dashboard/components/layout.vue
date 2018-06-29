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
                <b-form-input id="basicName" type="text" placeholder="640" autocomplete="name"></b-form-input>
              </b-col>

              <b-col lg="2" class='d-flex align-items-center justify-content-center'>
                <i class="fa fa-times fa-lg"></i>
              </b-col>

              <b-col lg="5">
                <b-form-input id="basicName" type="text" placeholder="360" autocomplete="name"></b-form-input>
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
                <b-form-input id="basicName" type="text" placeholder="1280" autocomplete="name"></b-form-input>
              </b-col>

              <b-col lg="2" class='d-flex align-items-center justify-content-center'>
                <i class="fa fa-times fa-lg"></i>
              </b-col>

              <b-col lg="5">
                <b-form-input id="basicName" type="text" placeholder="720" autocomplete="name"></b-form-input>
              </b-col>

            </b-row>
          </b-form-group>

          <b-form-group
            label="Generations"
            label-for="basicName"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicName" placeholder="50" type="number"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Save Settings"
            label-for="basicSelect"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="basicSelect"
              :plain="true"
              :options="['Save All', 'Save every 10', 'Save every 25', 'Save every 50', 'Only Last']"
              value="Please select">
            </b-form-select>
          </b-form-group>

          <div slot="footer">
            <b-button type="submit" size="lg" block="true" variant="success">
              <i class="fa fa-check mr-1"></i>
              Add to Queue
            </b-button>
          </div>

          </b-form>
        </b-col>

        <!-- Queue -->
        <b-col md="6">
          <div class="h4 m-0">24.9%</div>
          <div>Processing iteration 24 of 100...</div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">All shitty things come with time :)</small>

          <hr>
          <p class="lead mb-0">Queue</p>
          <small class="text-muted">Queue your pretty videos here</small>
          <ul class="list-group mt-2">
            <li class="list-group-item bg-dark border-light">
              <div class="row">
                <div class="col-sm-12">
                  <p class="mb-0">Filename</p>
                </div>
              </div>
              <!-- <div class="row"> -->
                <!-- <div class="col-sm-12"> -->
                  <!-- <small>Filename</small> -->
                <!-- </div> -->
            </li>
          </ul>
        </b-col>
      </div>

    </b-card>
  </b-row>
</template>

<script>

// const Promise = require('bluebird')
// const { spawn } = require('child_process')

export default {
  name: 'dashboard',
  methods: {
    onUpload (e) {
      console.log('ON UPLOAD')
      console.log(e)
      let inputFile = e.target.files[0].path
      console.log(inputFile)
      this.makeShitty(inputFile)
    },
    makeShitty (inputFile) {
      let i = 0
      let limit = 2
      let iterations = []

      while (i < limit) {
        let inputFilename = 'iteration_app_' + String(i) + '.mp4'
        let outputFilename = 'iteration_app_' + String(i + 1) + '.mp4'
        let iteration = { i: inputFilename, o: outputFilename }

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
        console.log(iteration)

        return new Promise((resolve, reject) => {
          let args = ['-i', iteration.i, '-vf', `scale=${iteration.scale}`, iteration.o, '-hide_banner']
          const ls = window.spawn('ffmpeg', args)

          ls.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`)
          })

          ls.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`)
          })

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
      // Promise.each(iterations, processVideo).then(() => {
      //   console.log('DONE')
      // })
    }
  }
}
</script>

