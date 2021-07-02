<template>
  <div class="article_card">
    <div class="relative">
      <img :src="image" alt="" class="">
      <div class="px-2 text-center text-xs md:text-sm
    py-1 bg-green-400 mx-5 text-white box">{{ contentType }}
    </div>   
    </div>
    
    <div class="px-5 mt-5">
      <p class="font-extrabold text-xl">{{ title }}</p>
      <p class="text-xs font-bold text-gray-600 mt-3">{{ author }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    author: {
      type: String,
      default: null,
    },
    contentType: {
    type: String,
    default: null,
    },
  }
}
</script>
<style lang="scss" scoped>
.article_card {
  background: #ffffff;
  width: 300px;
  height: 373px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0px 0px 40px rgba(46, 46, 46, 0.11);
  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
  .box{
  position:absolute; 
  bottom:-14px;
  }
  @include sm {
    width:100%;
    height: 350px;
  }
  @include md {
    width: 300px;
  }
  @include lg {
    width: 270px;
  }
}
</style>