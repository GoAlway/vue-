<template>
  <el-container>
    <el-header>
      <div class="logo">我是logo</div>
      <div class="title">
        <h3>标题</h3>
      </div>
      <div class="user">
        <div class="msg">msg</div>
        <div class="avator">
          <img />
        </div>
        <div class="personalCenter">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              个人中心
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <el-menu router unique-opened background-color default-active="/">
          <template v-for="(menu, index) in menuList">
            <!-- 一级菜单 -->
            <el-menu-item v-if="menu.children.length==0" :key="index" :index="menu.name">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ menu.title }}</span>
            </el-menu-item>

            <!-- 二级菜单 -->
            <el-submenu v-else :index="menu.name" :key="index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ menu.title }}</span>
              </template>

              <template v-for="(submenu,subIndex) in menu.children">
                <el-menu-item
                  v-if="submenu.children.length==0"
                  :index="submenu.name"
                  :key="subIndex"
                >
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{ submenu.title }}</span>
                  </template>
                </el-menu-item>

                <!-- 三级菜单 -->
                <el-submenu v-else :index="submenu.name" :key="subIndex">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{ submenu.title }}</span>
                  </template>
                  <template v-for="(thirdmenu, thirdIndex) in submenu.children">
                    <el-menu-item :index="thirdmenu.name" :key="thirdIndex">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{ thirdmenu.title }}</span>
                      </template>
                    </el-menu-item>
                  </template>
                </el-submenu>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: []
    };
  },
  methods: {},
  created() {
    this.menuList = this.$store.state.menuList;
    console.log(this.$store.state.UERINFO,'这是用户信息')
  }
};
</script>

<style lang='scss' scoped>
.el-container {
  height: 100vh;
  width: 100%;
}
.el-header {
  padding: 0;
  display: flex;
  .logo {
    flex: 0 0 250px;
  }
  .title {
    flex: 1;
    line-height: 60px;
    padding-left: 20px;
    background-color: springgreen;
  }
  .user {
    flex: 0 0 300px;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    .msg {
      flex: 0 0 50px;
    }
    .avator {
      flex: 0 0 50px;
      img {
        width: 50px;
        height: 50px;
        background-color: red;
        border-radius: 50%;
      }
    }
    .personalCenter {
    }
  }
}
.el-aside {
  width: 200px;
  .el-menu {
    height: 100%;
  }
}
.el-main {
  padding: 0;
}
</style>
