<template>
  <ul class="list-group mt-2">
    <li class="list-group-item bg-dark border-light" v-for="each in queue">
      <div class="row">
        <div class="col-sm-12">
          <p class="mb-0">{{ each.inputFile }}</p>
        </div>
      </div>
    </li>
    <li class="list-group-item bg-dark border-warning text-warning text-center" v-if="!queue[0]">
      <i class="fa fa-warning mr-2"></i>
      No jobs in queue
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Queue',
  computed: mapGetters({
    queue: 'video/queue'
  })
}
</script>

