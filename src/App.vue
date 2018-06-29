
<template>
  <div id="app">
    <AppNavbar/>
    <router-view/>
    <!-- <Notification/> -->
  </div>
</template>

<script>
import AppNavbar from './containers/app_navbar'
import AppFooter from './containers/app_footer'
// import Notification from './containers/app_notification'

export default {
  name: 'app',

  // Top-Level Application Components
  components: {
    AppNavbar,
    // Notification,
    AppFooter
  },

  // Top-Level page Meta
  metaInfo: {
    title: 'Loading...', // set a title
    titleTemplate: 'Shitvid - %s', // title is now "Shitvid - Loading..."
    htmlAttrs: {
      lang: 'en'
    }
  }

}
</script>

<style lang="sass">
  @import "./sass/vendor.sass"

  html
    height: 100%

  body
    height: 100%

  // TODO - remove this.
  .container-fluid
    height: 100%
    padding-top: 3.5rem

  #app
    height: 100%
    width: 100%

</style>
