<template>
  <div class="articles">
    <section id="posts" class="posts-expand">
      <article
        class="post post-type-normal"
        itemscope
        v-for="(article,index) in articles"
        :key="index"
      >
        <div class="post-block" style="opacity: 1; display: block;">
          <link itemprop="mainEntityOfPage" :href="'articles/'+article._id" />

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
            <h1 class="post-title" itemprop="name headline">
              <a
                :href="'articles/'+article._id"
                class="post-title-link"
                itemprop="url"
              >{{article.title}}</a>
            </h1>

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
            </div>
          </header>

          <div
            class="post-body"
            itemprop="articleBody"
            style="opacity: 1; display: block; transform: translateY(0px);"
          >
            <p>
              <b v-html="article.content"></b>
              <!--noindex-->
            </p>
            <div class="post-button text-center">
              <a class="btn" :href="'articles/'+article._id" rel="contents">阅读全文 »</a>
            </div>

            <!--/noindex-->
          </div>
          <!-- <v-divider></v-divider> -->
          <footer class="post-footer">
            <div class="post-eof"></div>
          </footer>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  name: "articles",
  components: {},

  data() {
    return {
      articles: [],
      tags: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    formateTime(now) {
      var Timer = new Date(now);
      var y = Timer.getFullYear();
      var m = Timer.getMonth() + 1;
      var d = Timer.getDay();
      var hh = Timer.getHours();
      var mm = Timer.getMinutes();
      var ss = Timer.getSeconds();
      return y + " 年 " + m + " 月" + d + " 日 ";
    },
    Data() {
      // /tag/list
      this.$http
        .get("/common/article/article/list")
        .then(res => {
          this.articles = res.data.data;
        })
        .catch(() => {});
    },
    
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
    this.Data();
    this.Tag();
    this.$emit("ArticleCount", this.articles.length);
  },
  mounted() {}
};
</script>

<style>
.post-body p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>