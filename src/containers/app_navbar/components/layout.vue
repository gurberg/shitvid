<template>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="#/">
      <!-- <img class='logo mr-3' src="/static/icon_white.svg"> -->
      <strong>Shit</strong>Vid
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="sass">

  nav.navbar
    border-bottom: 1px solid #fff

    .navbar-brand
      letter-spacing: .25rem !important
      font-family: sans-serif
      text-transform: uppercase
      font-weight: 100
      letter-spacing: 0.1rem

      strong
        font-weight: 400

      img.logo
        float: left
        margin-right: 0.4rem
        height: 2rem
        display: flex

</style>
