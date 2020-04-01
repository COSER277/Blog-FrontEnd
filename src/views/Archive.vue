<template>
  <div class="articles">
    <div class="post-block archive" style="opacity: 1; display: block;">
      <div id="posts" class="posts-collapse">
        <span class="archive-move-on"></span>

        <span class="archive-page-counter">
          喔耶!我已经记录写下 {{ articles.length }} 文章了.
          继续加油，冲冲冲!!!.
        </span>

        <div
          class="collection-title"
          style="opacity: 1; display: block; transform: translateX(0px);"
        >
          <h1
            class="archive-year"
            id="archive-year-2019"
            style="opacity: 1; display: block; transform: translateX(0px);"
          >2019</h1>
        </div>
        <article
          class="post post-type-normal"
          itemscope
          itemtype="http://schema.org/Article"
          v-for="item in articles"
          :key="item.id"
        >
          <header
            class="post-header"
            style="opacity: 1; display: block; transform: translateY(0px);"
          >
            <h2 class="post-title">
              <a class="post-title-link" :href="'/articles/' + item._id" itemprop="url">
                <span itemprop="name">{{ item.title }}</span>
              </a>
            </h2>

            <div class="post-meta">
              <time
                class="post-time"
                itemprop="dateCreated"
                :datetime="item.time"
                :content="item.time"
              >{{ item.edited_time | formateTime }}</time>
            </div>
          </header>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articles",
  components: {},

  data() {
    return {
      articles: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    getData() {
      this.$http
        .get("/common/article/article/list")
        .then(res => {
          this.articles = res.data.data;
        })
        .catch(() => {});
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
    this.getData();
    this.$emit("ArticleCount", this.articles.length);
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.articles {
  margin: 0 20px;
  .posts-expand {
    .post-title-link::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #000;
      visibility: hidden;
      transform: scaleX(0);
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    }
    .post-body {
      /* text-align: justify; */
      opacity: 0;
      overflow-wrap: break-word;
      word-wrap: break-word;
      font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    .post-eof {
      margin: 40px auto 40px;
      width: 8%;
      height: 1px;
      background: #ccc;
      text-align: center;
    }
    .post-title {
      margin-left: 60px;
      font-size: 16px;
      font-weight: normal;
      line-height: inherit;
      margin-left: 200px;
    }
  }
}
</style>
