<template>
  <div class="banner" >
    <div class="banner-left">
      <a-carousel arrows class="carousel">
        <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1;">
          <a-icon type="left-circle" style="font-size: 30px"/>
        </div>
        <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
          <a-icon type="right-circle" style="font-size: 30px"/>
        </div>
        <div>
          <h3>
            <img src="https://www.duoguyu.com/uploads/201903/14/190314110015897.jpg" alt>
          </h3>
        </div>
        <div>
          <h3>
            <img src="https://www.duoguyu.com/uploads/201903/14/190314110015897.jpg" alt>
          </h3>
        </div>
        <div>
          <h3>
            <img src="https://www.duoguyu.com/uploads/201903/14/190314110015897.jpg" alt>
          </h3>
        </div>
        <div>
          <h3>
            <img src="https://www.duoguyu.com/uploads/201903/14/190314110015897.jpg" alt>
          </h3>
        </div>
      </a-carousel>
    </div>
    <div class="banner-right">
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.banner {
  display: flex;
  justify-content: space-between;
  height: 280px;
  .banner-left {
    overflow: hidden;
    margin-right: 15px;
    .carousel {
      width: 690px;
      h3 {
        margin: 0;
        width: 690px;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .custom-slick-arrow {
        background-color: rgba(31, 45, 61, 0.11);
        color: #fff!important;
        opacity: 0.3;
        font-size: 25px;
        width: 25px;
        height: 25px;
        &::before {
          display: none;
        }
      }
    }
  }
  .banner-right {
    flex: 1;
    background-color: #ccc;
  }
}
</style>
