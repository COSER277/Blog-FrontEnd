<template>
  <div class="detail">
    <div class="content-wrap">
      <div id="content" class="content">
        <div id="posts" class="posts-expand">
          <article class="post post-type-normal" itemscope itemtype="http://schema.org/Article">
            <div class="post-block" style="opacity: 1; display: block;">
              <link itemprop="mainEntityOfPage" />

              <span hidden itemprop="author" itemscope itemtype="http://schema.org/Person">
                <meta itemprop="name" content="Coser" />
                <meta itemprop="description" content="一个学生党的码农嘻嘻" />
                <meta itemprop="image" content="/images/avatar.jpg" />
              </span>

              <span hidden itemprop="publisher" itemscope itemtype="http://schema.org/Organization">
                <meta itemprop="name" content="Coser" />
              </span>

              <header
                class="post-header"
                style="opacity: 1; display: block; transform: translateY(0px);"
              >
                <h1 class="post-title" itemprop="name headline">{{article.title}}</h1>

                <div class="post-meta">
                  <span class="post-time">
                    <span class="post-meta-item-icon">
                      <i class="fa fa-calendar-o"></i>
                    </span>

                    <span class="post-meta-item-text">发表于</span>

                    <time
                      :title="'创建时间：'+formateTime(article.created_time) "
                      itemprop="dateCreated datePublished"
                    >{{article.created_time|formateTime}}</time>

                    <span class="post-meta-divider">|</span>

                    <span class="post-meta-item-icon">
                      <i class="fa fa-calendar-check-o"></i>
                    </span>

                    <span class="post-meta-item-text">更新于</span>

                    <time
                      :title="'修改时间：'+formateTime(article.edited_time)"
                      itemprop="dateModified"
                    >{{article.edited_time|formateTime}}</time>
                  </span>

                  <span class="post-meta-divider">|</span>
                  <span class="post-meta-item-icon">
                    <i class="fa fa-eye"></i>
                    阅读次数：
                    <span
                      class="busuanzi-value"
                      id="busuanzi_value_page_pv"
                    >{{article.view_count?article.view_count:'0'}}</span>
                  </span>
                </div>

                <div class="post-tags">
                  <a
                    rel="tag"
                    v-for="(tag,index) in article.tags"
                    :key="index"
                    :href="'/tags/'+tag"
                  >
                    <!-- <span v-if="Tags[].==tag">{{Tags[index].name}}</span> -->
                  </a>
                </div>
              </header>

              <div
                class="post-body"
                itemprop="articleBody"
                style="opacity: 1; display: block; transform: translateY(0px);"
              >
                <p v-html="article.content"></p>
              </div>

              <footer class="post-footer">
                <div class="post-nav">
                  <div class="post-nav-next post-nav-item">
                    <a rel="next" title="GitHub+Hexo 搭建个人主页">
                      <i class="fa fa-chevron-left"></i>
                      {{article.preArticle?article.preArticle:'已经是第一篇文章了'}}
                    </a>
                  </div>

                  <span class="post-nav-divider"></span>

                  <div class="post-nav-prev post-nav-item"></div>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    id: {}
  },
  data() {
    return {
      article: {},
      Tags: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    fecth() {
      this.$http
        .post(`/common/article/${this.id}`)
        .then(res => {
          this.article = res.data.data;
        })
        .catch(() => {});
    },
    Tag() {
      // /tag/list
      this.$http
        .get("/common/tag/tag/list")
        .then(res => {
          this.Tags = res.data.data;
        })
        .catch(() => {});
    },
    formateTime(now) {
      var Timer = new Date(now);
      var y = Timer.getFullYear();
      var m = Timer.getMonth() + 1;
      var d = Timer.getDay();
      var hh = Timer.getHours();
      var mm = Timer.getMinutes();
      var ss = Timer.getSeconds();
      return y + " 年 " + m + " 月" + d + " 日 ";
    }
  },
  filters: {
    formateTime(now) {
      var Timer = new Date(now);
      var y = Timer.getFullYear();
      var m = Timer.getMonth() + 1;
      var d = Timer.getDay();
      var hh = Timer.getHours();
      var mm = Timer.getMinutes();
      var ss = Timer.getSeconds();
      return y + " 年 " + m + " 月" + d + " 日 ";
    }
  },
  created() {
    this.Tag();
    this.fecth();
  },
  mounted() {}
};
</script>
<style lang="scss">
.detail {
  margin: 0 auto;
}
</style>
