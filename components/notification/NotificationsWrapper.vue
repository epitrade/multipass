<template lang="html">
  <span class="notifications-wrapper" >
    <span class="notification-item pad" :class="{ 'notification-shown' : isNotificationShown }">
      {{ notificationText }}
    </span>
  </span>
</template>

<script>

import { mapActons, mapGetters } from "vuex";


export default {
  computed: {
    ...mapGetters([
      "isNotificationShown",
      "notificationText"
    ])
  }

}
</script>

<style lang="css">

  .notifications-wrapper {
    position: absolute;
    top:0;
    right: 0;
    margin-top: 16px;
    z-index: 20;
    display: inline-block;
    overflow: hidden;
  }

  .notification-item {
    display: inline-block;
    position: relative;
    transition: all 1s ;
    right: -400px;
    background: black;
    color: black;
    text-align: left;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .notification-shown {
    color: white;
    right: 0px;
  }


</style>
