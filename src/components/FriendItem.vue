<template>
  <div>
    <div class="image middle">
      <img :src="friend.avatar" alt />
      <div class="image-content">
        <h1>{{friend.name}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wraper",
  components: {},
  props: {
    friend: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.friend);
  }
};
</script>
<style  lang="scss" scoped>
* {
  font-family: "montserrat";
}

body {
  border-radius: 10px 10px;
  background: #ddd;
  a {
    text-decoration: none;
    color: #ddd;
  }
}
.middle {
  position: relative;
}

.image {
  width: 300px;
  height: 200px;
  overflow: hidden;
  margin: 5px;
  padding: 0 5px;
  cursor: pointer;
  border-radius: 10px 10px;
  background: #eee;
  &:hover {
    .icon {
      transform: translateY(0px);
    }
  }
  .image-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 40px;

    box-sizing: border-box;
    /* background: #ddd; */
    /* &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.7);
      width: 100%;
      height: 140px;
      clip-path: polygon(0 100%, 100% 0, 100% 100%); 
      transition: 0.5s;
    } */

    h1 {
      color: #fff;
      text-transform: uppercase;
      transform: translateY(20px);
      transition: 0.4s;
    }
   
  }
}
</style>