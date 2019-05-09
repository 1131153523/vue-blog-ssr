<template>
  <header class="header">
    <h1 class="logo">
      <nuxt-link to="/">
        <img src="https://www.duoguyu.com/uploads/201904/23/190423113846842.png" alt="">
      </nuxt-link>
      <a-input-search
        v-if="screenWidth > 500"
        class="search"
        placeholder="文章搜索"
        style="width: 200px"
      />
    </h1>
    <nav class="nav">
      <a-dropdown v-if="screenWidth < 1130" :trigger="['click']"  placement="bottomCenter"  class="nav-dropdown">
          <a class="ant-dropdown-link" href="#">
            <span style="color: #1890ff;font-size: 1.8rem;margin-right: 1rem">首页</span><a-icon type="down" :style="{fontSize: '2.3rem', transform: 'scale3d(1, 0.8, 1)', color: '#1890ff'}" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <nuxt-link to="/" >首页</nuxt-link>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <nuxt-link to="/jour">札记</nuxt-link>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              <nuxt-link to="/">导航</nuxt-link>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="4">
              <nuxt-link to="/">资源</nuxt-link>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="5">
              <nuxt-link to="/">造梦者</nuxt-link>
            </a-menu-item>
          </a-menu>
      </a-dropdown>
      <template v-else-if="screenWidth >= 1130">
        <nuxt-link to="/" :class="{'nav-active': $route.fullPath === '/'}">首页</nuxt-link>
        <nuxt-link to="/jour" :class="{'nav-active': $route.fullPath === '/jour'}">札记</nuxt-link>
        <nuxt-link to="/">导航</nuxt-link>
        <nuxt-link to="/">资源</nuxt-link>
        <nuxt-link to="/">造梦者</nuxt-link>
        <div class="login-reg-btn">
          <nuxt-link to="/" class="login-btn">登录</nuxt-link>
          <a-button type='primary' class="register-btn">注册</a-button>
        </div>
      </template>
    </nav>
  </header>
</template>
<script>
export default {
  data(){
    return {
      screenWidth: 1300
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }, false)
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  .logo {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    img {
      width: 5.5rem;
    }
    .search {
      margin-left: 2rem;
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .nav-dropdown {
      margin-left: 1rem;
      margin-right: 3rem;
    }
    > a {
      display: flex;
      margin-left: 4rem;
      height: 100%;
      color: #999;
      text-decoration: none;
      position: relative;
      transition: all 0.3s linear;
      align-items: center;
    }
    .login-reg-btn {
      margin-left: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .login-btn {
        color:#1890ff;
      }
      .register-btn {
        margin-left: 3rem;
      }
    }
  }
}


.ant-dropdown-menu-item {
  a {
    text-align: center;
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }
}
</style>
