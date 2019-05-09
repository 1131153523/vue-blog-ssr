<template>
  <div class="container" >
    <canvas id="Mycanvas"></canvas>
    <a-row class="fixed header-container">
      <a-col :xs="0" :sm="0" :md="1" :lg="3" :xl="3"/>
      <a-col :xs="24" :sm="24" :md="22" :lg="18" :xl="18" :style="{height: '100%'}">
        <Header/>
      </a-col>
      <a-col :xs="0" :sm="0" :md="1" :lg="3" :xl="3"/>
    </a-row>
    <a-row>
      <a-col :xs="0" :sm="0" :md="1" :lg="3" :xl="3"/>
      <a-col :xs="24" :sm="24" :md="22" :lg="18" :xl="18">
        <nuxt/>
      </a-col>
      <a-col :xs="0" :sm="0" :md="1" :lg="3" :xl="3"/>
    </a-row>
    <a-back-top />
  </div>
</template>
<script>
import Header from '~/components/common/Header'
export default {
  components: {
    Header
  },
  beforeMount() {
    if (this.check()) {
      this.animate()
    }
  },
  methods: {
    animate() {
      const WIDTH = 1920
      const HEIGHT = window.innerHeight
      const POINT = 35
      const canvas = document.getElementById('Mycanvas')
      canvas.width = WIDTH
      canvas.height = HEIGHT
      const context = canvas.getContext('2d')
      context.strokeStyle = 'rgba(0,0,0,0.04)'
      context.strokeWidth = 1
      context.fillStyle = 'rgba(0,0,0,0.08)'
      const circleArr = []
      function Line(x, y, _x, _y, o) {
        this.beginX = x
        this.beginY = y
        this.closeX = _x
        this.closeY = _y
        this.o = o
      }
      function Circle(x, y, r, moveX, moveY) {
        this.x = x
        this.y = y
        this.r = r
        this.moveX = moveX
        this.moveY = moveY
      }
      function num(max, _min) {
        const min = arguments[1] || 0
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function drawCricle(cxt, x, y, r, moveX, moveY) {
        const circle = new Circle(x, y, r, moveX, moveY)
        cxt.beginPath()
        cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
        cxt.closePath()
        cxt.fill()
        return circle
      }
      function drawLine(cxt, x, y, _x, _y, o) {
        const line = new Line(x, y, _x, _y, o)
        cxt.beginPath()
        cxt.strokeStyle = 'rgba(0,0,0,' + o + ')'
        cxt.moveTo(line.beginX, line.beginY)
        cxt.lineTo(line.closeX, line.closeY)
        cxt.closePath()
        cxt.stroke()
      }
      function init() {
        for (let i = 0; i < POINT; i++) {
          circleArr.push(
            drawCricle(
              context,
              num(WIDTH),
              num(HEIGHT),
              num(15, 2),
              num(10, -10) / 40,
              num(10, -10) / 40
            )
          )
        }
        draw()
      }

      function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < POINT; i++) {
          drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r)
        }
        for (let i = 0; i < POINT; i++) {
          for (let j = 0; j < POINT; j++) {
            if (i + j < POINT) {
              const A = Math.abs(circleArr[i + j].x - circleArr[i].x)
              const B = Math.abs(circleArr[i + j].y - circleArr[i].y)
              const lineLength = Math.sqrt(A * A + B * B)
              const C = (1 / lineLength) * 7 - 0.009
              const lineOpacity = C > 0.03 ? 0.03 : C
              if (lineOpacity > 0) {
                drawLine(
                  context,
                  circleArr[i].x,
                  circleArr[i].y,
                  circleArr[i + j].x,
                  circleArr[i + j].y,
                  lineOpacity
                )
              }
            }
          }
        }
      }
      function callback() {
        for (let i = 0; i < POINT; i++) {
          const cir = circleArr[i]
          cir.x += cir.moveX
          cir.y += cir.moveY
          if (cir.x > WIDTH) cir.x = 0
          else if (cir.x < 0) cir.x = WIDTH
          if (cir.y > HEIGHT) cir.y = 0
          else if (cir.y < 0) cir.y = HEIGHT
        }
        draw()
        window.requestAnimFrame(() => {
          callback()
        })
      }
      function req() {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 6000 / 60)
          }
        )
      }
      window.onload = function() {
        window.requestAnimFrame = req()
        init()
        callback()
      }
    },
    check() {
      const userAgentInfo = navigator.userAgent
      const Agents = [
        'Android',
        'iPhone',
        'SymbianOS',
        'Windows Phone',
        'iPad',
        'iPod'
      ]
      let flag = true
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
#Mycanvas {
  position: fixed;
  top: 0;
  left: 0;
}
.container {
  padding-top: 73px;
  background-color: #fafafa;
}
.fixed {
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
}
.header-container {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  height: 6rem;
}
</style>
