<template>
  <div>
    <div>
      <Item class="item" v-for="(friend,index) in friends" :key="index" :friend="friend"></Item>
    </div>
  </div>
</template>

<script>
import Item from "../components/FriendItem";
export default {
  name: "wraper",
  components: { Item },
  props: {},
  data() {
    return {
      friends: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    async fecth() {
      const res = await this.$http.get("/common/friend/friend/list");
      this.friends = res.data.data;
    }
  },
  created() {},
  mounted() {
    this.fecth();
  }
};
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  float: left;
}
</style>
