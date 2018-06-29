<template>
  <div class="row h-100 align-items-center">
    <div class="col-lg-12">
      <div class="row my-4">
        <div class="col-lg-12 text-center">
          <!-- <img src="/static/icon_white.svg" class="welcome-logo"/> -->
          <i class="fa fa-3x fa-video-camera"></i>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-lg-12 text-center">
          <p class="welcome-text">WELCOME</p>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-lg-12 text-center">
          <p class="lead"><a href="https://github.com/gurberg/shitvis" target="_blank"> ShitVid</a> is an open-source tool for making your videos look really super shitty.</p>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-lg-12 text-center">
          <a class="btn btn-outline-primary btn-lg" href="#/dashboard">
            <i class="fa fa-check mr-2"></i>
            Let's get shitty
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main_home'
  }
</script>

<style lang="sass">
  img.welcome-logo
    height: 4rem
    width: 4rem

  .welcome-text
    letter-spacing: .6rem
    font-weight: 300
    font-size: 2rem
</style>
