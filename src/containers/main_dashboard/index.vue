
<template>
    <div class="container-fluid">
      <LayoutView/>
    </div>

</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'main_home',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Main - Home'
  }
}
</script>
