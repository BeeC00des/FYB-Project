<template>
<div class="w-full flex flex-col flex-no-wrap h-screen bg-color">
  <div class="lg:px-20 px-5 py-8">
    <g-link to="/">
          <p class="logo-style">Cardio</p>
    </g-link>
  </div>
  <div class="lg:w-8/12 w-full mx-auto justify-center items-center lg:px-20 ">
    <div class="flex w-full items-center justify-center pb-5">
      <img src="../assets/img/Error-img.png" alt class="error-img-size"/>
    </div>
    <div class=" flex w-full items-center justify-center">
       <p class="error-text">Something went wrong!</p>
    </div>
    <div class="flex mt-5 items-center justify-center text-base">
      <g-link to="/" class="btn-secondary"> Go Back </g-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  metaInfo: {
    title: "404 error page | Cardio",
  },
};
</script>
<style lang="scss" scoped>
  .f04-img {
    width: 800px;
    object-fit: cover;
  }
  .bg-color{
    background-color:#FDF8F4 ;
  }
  .error-text{
    font-size: 24px;
    font-weight: 500;
    color:#20375E;
  }
  .error-img-size{
    width:550px;
    height:350px;
  }
</style>