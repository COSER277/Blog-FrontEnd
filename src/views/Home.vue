<template>
  <div class="home">
    <div class="name">
      <h2>Cos</h2>
    </div>
    <p class="descr">{{user.authorDescr}}</p>
    <!-- <p v-html="user.content"></p> -->
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    // async fetch() {
    //   const res = await this.$http.get("/common/Admin/about/self");
    //   // console.log(res);
    //   this.user = res.data.item[0];
    // }
  },
  created() {
    // this.fetch();
  }
};
</script>
<style lang="scss" scoped>
.home {
  margin: 0 10px;
  .name,
  .descr {
    text-align: center;
  }
}
</style>
