<template>
  <div class="loading-dots relative"><div></div><div></div><div></div><div></div></div>
</template>

<script>
export default {
}
</script>

<style lang="css">

  .loading-dots {
    min-width: 64px;
    height: 12px;
  }

  .loading-dots div {
      position: absolute;
      top: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: rgba(0,0,0,0.15);
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .loading-dots div:nth-child(1) {
      left: 6px;
      animation: loading-dots1 0.6s infinite;
  }
  .loading-dots div:nth-child(2) {
      left: 6px;
      animation: loading-dots2 0.6s infinite;
  }
  .loading-dots div:nth-child(3) {
      left: 26px;
      animation: loading-dots2 0.6s infinite;
  }
  .loading-dots div:nth-child(4) {
      left: 45px;
      animation: loading-dots3 0.6s infinite;
  }
  @keyframes loading-dots1 {
      0% {
          transform: scale(0);
     }
      100% {
          transform: scale(1);
     }
  }
  @keyframes loading-dots3 {
      0% {
          transform: scale(1);
     }
      100% {
          transform: scale(0);
     }
  }
  @keyframes loading-dots2 {
      0% {
          transform: translate(0, 0);
     }
      100% {
          transform: translate(19px, 0);
     }
  }
</style>
