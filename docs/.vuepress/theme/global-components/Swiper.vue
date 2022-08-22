<template>
  <div class="swiper-container">
    <div class="lists swiper-wrapper">
      <div class="img swiper-slide" v-for="item in items" :key="item">
        <img v-if="!isVideo(item)" :src="item" />
        <video v-else :src="item" controls="controls" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: "Swiper",

  components: {},
  props: ["items"],
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: `.swiper-pagination`,
        type: "bullets",
      },
    });
  },
  methods: {
    isVideo(item) {
      return item.endsWith(".mp4");
    },
  },
};
</script>

<style>
.swiper-container {
  overflow: hidden;
  height: 500px;
  width: 100%;
  position: relative;
}
.swiper-container .lists {
  height: 500px;
  width: 100%;
  display: flex;
}
.swiper-container .img {
  height: 500px;
  background-repeat: no-repeat;
  width: 100%;
  background-size: contain;
  flex-shrink: 0;
}

.swiper-container .img img {
  height: 500px;
  width: 100%;
  object-fit: contain;
}

.swiper-container .img video {
  height: 500px;
  width: 100%;
  object-fit: contain;
}
.swiper-container .swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-container .swiper-pagination .swiper-pagination-bullet {
  height: 10px;
  width: 10px;
  margin: 0px 20px;
  background-color: #999;
  display: block;
  border-radius: 10px;
}

.swiper-container .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #4390ee;
}
</style>
