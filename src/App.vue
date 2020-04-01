<template>
  <v-app id="inspire" dark>
    <!-- 侧边栏 -->
    <v-navigation-drawer v-model="drawer" app right dark style="z-index: 1020">
      <template v-slot:prepend>
        <v-list-item two-line>
          <div
            class="site-overview-wrap sidebar-panel sidebar-panel-active"
            style="opacity: 1; display: block; transform: translate(0px,30px);"
          >
            <div class="site-overview" style="max-height: 620.2px;">
              <div class="site-author motion-element" itemprop="author" itemscope>
                <img class="site-author-image" itemprop="image" src="./assets/logo.jpg" alt="Coser" />

                <p class="site-author-name" itemprop="name">{{user.SiteName}}</p>
                <div class="site-description motion-element" itemprop="description">{{user.descr}}</div>
              </div>

              <nav class="site-state motion-element">
                <div class="site-state-item site-state-posts">
                  <a href="/articles">
                    <span class="site-state-item-count">{{total}}</span>
                    <span class="site-state-item-name">文章</span>
                  </a>
                </div>

                <div class="site-state-item site-state-tags">
                  <a href="/archive">
                    <span class="site-state-item-count">{{total}}</span>
                    <span class="site-state-item-name">归档</span>
                  </a>
                </div>
              </nav>

              <div class="links-of-author motion-element">
                <span class="links-of-author-item">
                  <a
                    style="color:#fff;"
                    :href="user.github"
                    :title="'GitHub → '+user.github"
                    rel="noopener"
                    target="_blank"
                  >
                    <i class="fa fa-fw fa-github"></i>GitHub
                  </a>
                </span>
                <span class="links-of-author-item">
                  <a
                    style="color:#fff;"
                    :href="user.githubPerson"
                    :title="'GitHub → '+user.githubPerson"
                    rel="noopener"
                    target="_blank"
                  >
                    <i class="fa fa-fw fa-github"></i>Resume
                  </a>
                </span>

                <span class="links-of-author-item">
                  <a :title="'E-Mail →'+ user.github" style="color:#fff;">
                    <i class="fa fa-fw fa-envelope"></i>E-Mail
                  </a>
                </span>
              </div>
            </div>
          </div>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" @click="goto(item.url)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- 中间圆头像 -->
    <v-app-bar app color="dark" dark flat :hight="100" height="80px">
      <v-spacer />
      <v-list-item-avatar
        style="width:80px;height:80px;position:absolute;left:50%;top:70%;transform: translate(-50%,-50%); margin: 20px auto;"
      >
        <a href="/" style="width: 80px;height: 80px;">
          <img src="./assets/logo.jpg" />
        </a>
      </v-list-item-avatar>
      <!-- <v-toolbar-title flat>Cos-个人博客</v-toolbar-title> -->

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <!-- 中间内容 -->
    <v-content style="margin-top:40px;">
      <router-view :user="user"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "index",
  props: {
    source: String
  },
  data: () => ({
    //博主
    user: {},
    //文章总数
    total: 0,
    //
    drawer: null,
    //侧边栏
    items: [
      { title: "主页", icon: "mdi-home", url: "/" },
      // { title: "文章", icon: "mdi-book", url: "/articles" },
      // { title: "归档", icon: "mdi-archive", url: "/archive" },
      { title: "码库", icon: "mdi-code-tags", url: "/codes" },
      { title: "资源", icon: "mdi-codepen", url: "/sources" },
      { title: "友链", icon: "mdi-link", url: "/friends" }
    ]
  }),
  methods: {
    //跳转
    goto(url) {
      this.$router.push(url);
    },
    //请求博主信息
    async fetch() {
      const res = await this.$http.get("/common/Admin/about/self");
      // console.log(res);
      this.user = res.data.data.item[0];
      this.total = res.data.data.total;
    }
  },
  //注册完成生命周期时触发
  created() {
    this.fetch();
  }
};
</script>
<style >
/* 引入Next样式 */
@import "./assets/main.css";
</style>
