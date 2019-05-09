<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404" class="error-404">
      <div>
        <svg viewBox="0 0 600 500">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em">{{error.statusCode}}</text>
          </symbol>
          <use xlink:href="#s-text" class="text"></use>
          <use xlink:href="#s-text" class="text"></use>
          <use xlink:href="#s-text" class="text"></use>
          <use xlink:href="#s-text" class="text"></use>
          <use xlink:href="#s-text" class="text"></use>
        </svg>
        <nuxt-link to="/" class="info">返回首页</nuxt-link>
      </div>
    </h1>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>
<style lang="less" scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
}
.error-404 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .info {
    color: #999;
    text-align: center;
    width: 100%;
    display: inline-block;
    margin-top: -100px;
  }
  svg {
    width: 100%;
    font-size: 300px;
  }
  img {
    border: 0;
  }

  .text {
    fill: none;
    stroke-width: 4;
    stroke-linejoin: round;
    stroke-dasharray: 70 330;
    stroke-dashoffset: 0;
    -webkit-animation: stroke 6s infinite linear;
    animation: stroke 6s infinite linear;
  }
  .text:nth-child(5n + 1) {
    stroke: #f2385a;
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  .text:nth-child(5n + 2) {
    stroke: #f5a503;
    -webkit-animation-delay: -2.4s;
    animation-delay: -2.4s;
  }
  .text:nth-child(5n + 3) {
    stroke: #e9f1df;
    -webkit-animation-delay: -3.6s;
    animation-delay: -3.6s;
  }
  .text:nth-child(5n + 4) {
    stroke: #56d9cd;
    -webkit-animation-delay: -4.8s;
    animation-delay: -4.8s;
  }
  .text:nth-child(5n + 5) {
    stroke: #3aa1bf;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }
  @-webkit-keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
}
</style>
