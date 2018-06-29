
<template>
  <div class="col-lg-12 text-center">
    <div role="alert" class="alert alert-dismissible fade show" :class="'alert-' + item.context">

      <button v-if="item.dismissible" @click="dismiss(item.id)" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        <span class="sr-only">Close</span>
      </button>

      <strong v-if="item.strong">{{item.strong}}</strong>

      {{item.message}}

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  props: ['item'],
  methods: {
    dismiss: (id) => {
      return store.commit('notification/remove', id)
    }
  }
}
</script>
