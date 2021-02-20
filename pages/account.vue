<template lang="html">
  <div class="parallax-bg pad border-radius">
    <form-button button-text="Logout" class="mt mr secondary-button absolute-top-right " :is-disabled="false" @click.native.prevent="logout"> </form-button>
    <h2>Welcome back.</h2>
    <div class="row mt">

      {{ user }}

      <!--
      <ul>
        <li>google -> false <nuxt-link to="/connect/google">(connect)</nuxt-link></li>
        <li>lastfm -> false (connect)</li>
      </ul>-->
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters, } from "vuex";

import FormButton from "~/components/form/FormButton.vue";

export default {
  components: {
    FormButton
  },
  computed: {
    ...mapGetters([
      "user"
    ])
  },
  methods: {
    ...mapActions([
      "logout"
    ])
  },
  middleware: ["accountPageGuard"],
  pageTransition: "fade"
}
</script>

<style lang="css" scoped>
</style>
