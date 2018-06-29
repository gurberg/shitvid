
<template>
  <button class="btn btn-sm btn-outline-warning" v-if="visible" @click="closeDevice(device)">
    <i class="fa fa-times-circle-o mr-1"></i>
    Close
  </button>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  props: ['device'],
  methods: mapActions({
    closeDevice: 'web_usb/closeDevice'
  }),
  computed: {
    visible () {
      return this.device.opened && !this.device.fetching
    }
  }
}
</script>


