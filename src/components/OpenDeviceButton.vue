
<template>
  <button class="btn btn-sm btn-outline-success" v-if="visible" @click="openDevice(device)">
    <i class="fa fa-check-circle-o mr-1"></i>
    Open
  </button>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  props: ['device'],
  methods: mapActions({
    openDevice: 'web_usb/openDevice'
  }),
  computed: {
    visible () {
      return !this.device.opened && !this.device.fetching
    }
  }
}
</script>


