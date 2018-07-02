<template>
  <div>

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
          <b-form-input id="basicName" type="text" placeholder="640" v-model="job.small_x"></b-form-input>
        </b-col>

        <b-col lg="2" class='d-flex align-items-center justify-content-center'>
          <i class="fa fa-times fa-lg"></i>
        </b-col>

        <b-col lg="5">
          <b-form-input id="basicName" type="text" placeholder="360" v-model="job.small_y"></b-form-input>
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
          <b-form-input id="basicName" type="text" placeholder="1280" v-model="job.large_x"></b-form-input>
        </b-col>

        <b-col lg="2" class='d-flex align-items-center justify-content-center'>
          <i class="fa fa-times fa-lg"></i>
        </b-col>

        <b-col lg="5">
          <b-form-input id="basicName" type="text" placeholder="720" v-model="job.large_y"></b-form-input>
        </b-col>

      </b-row>
    </b-form-group>

    <b-form-group
      label="Generations"
      label-for="basicName"
      :label-cols="3"
      :horizontal="true">
      <b-form-input id="basicName" placeholder="50" type="number" v-model="job.generations"></b-form-input>
    </b-form-group>

    <b-form-group
      label="Save Settings"
      label-for="basicSelect"
      :label-cols="3"
      :horizontal="true">
      <select class="form-control" v-model="job.save_settings">
        <option value="SAVE_ALL">Save All</option>
        <option value="SAVE_EVERY_10">Save every 10</option>
        <option value="SAVE_EVERY_25">Save every 25</option>
        <option value="SAVE_EVERY_50">Save every 50</option>
        <option value="SAVE_ONLY_LAST">Only Last</option>
      </select>
    </b-form-group>

    <div slot="footer">
      <b-button size="lg" block variant="success" @click="addToQueue()">
        <i class="fa fa-check mr-1"></i>
        Add to Queue
      </b-button>
    </div>

  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['job'],
  methods: {
    onUpload (e) {
      console.log('ON UPLOAD')
      console.log(e)
      let inputFile = e.target.files[0].path // NOTE - doesn't work
      this.job.inputFile = inputFile
      // console.log(inputFile)
      // this.makeShitty(inputFile)
    },
    addToQueue () {
      console.log('ADD TO QUEUE')

      // Adds to queue
      this.queue.push(this.job)

      // Resets job
      this.job = _.clone(this.proto_job)
    }
  }
}
</script>

