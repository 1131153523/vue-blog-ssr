<template>
  <Aplayer
    class="aplayer"
    :music="list[0]"
    :list="list"
    :autoplay="true"
    :shuffle="true"
    repeat="list"
    :listFolded="true"
  />
</template>
<script>
let Aplayer
if (process.client) {
  Aplayer = require('vue-aplayer')
}
export default {
  components: {
    Aplayer
  },
  mounted(){
  },
  data() {
    return {
      list: [
        {
        title: '寻',
        artist: '华晨宇',
        src: 'http://dl.stream.qqmusic.qq.com/M8000027wPRz3Fp9sO.mp3?guid=1969892539&vkey=65DC678E476471117B82A62FC3060AF89AE09F93D7C809E65D81A26AAB2A0013FF44FD32DF130F238B6CEDE858C6E48B442C66396FF960E8&uin=0&fromtag=66',
        pic: 'http://musicugc.qianqian.com/ugcdiy/pic/d5ecc5ab0df1c34506c396e6da62d95b.jpg'
        },
        {
          title: '烟火里的尘埃',
          artist: '华晨宇',
          src:
            'http://m7.music.126.net/20190509220724/bbae211230042090eaaa7efb039b1aca/ymusic/5d63/5150/0851/5f226aac018cafc2cb248f7d28fbd5b4.mp3',
          pic:
            'http://musicugc.qianqian.com/ugcdiy/pic/d5ecc5ab0df1c34506c396e6da62d95b.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.aplayer {
  position: fixed;
  right: 0;
  bottom: 120px;
  min-width: 360px;
  transform: translate(300px)!important;
  transition: all 0.3s ease-out;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transform: translateX(0)!important;
  }
}
</style>
