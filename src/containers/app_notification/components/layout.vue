<template>
  <transition-group name="list" tag='div' class="container-fluid">
    <div class="row" v-for="each in collection" v-bind:key="each.id">
      <NotificationChild :item="each"/>
    </div>
  </transition-group>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import NotificationChild from './notificationChild'

export default {
  computed: {
    collection: () => {
      return store.getters['notification/collection']
    }
  },
  components: {
    NotificationChild
  }
}
</script>

<!-- // // // //  -->

<!-- QUESTION - SCOPED? -->
<style lang='sass'>
   // @import '../../../sass/app.sass'

   .list-enter-active, .list-leave-active
     transition: opacity .5s

   .list-enter, .list-leave-to
     opacity: 0

</style>
