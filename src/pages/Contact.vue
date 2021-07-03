<template>
<div class="w-full flex flex-col flex-no-wrap h-screen bg-color">
  <div class="lg:px-20 px-5 py-8">
    <g-link to="/">
          <p class="logo-style">Cardio</p>
    </g-link>
  </div>
  <div class="lg:flex w-11/12  mx-auto lg:px-12">
    <div class="lg:w-6/12 w-full items-start justify-between">
      <h1 class="header2 mb-3">Contact us</h1>
      <div class="input-section lg:w-9/12 w-full">
        <div class="py-4">
         <input type="text" id="textInput" placeholder="Full name" class="py-3  w-full px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-4">
          <input type="text" id="textInput" placeholder="Email Address" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-5">
         <textarea name="textbox" id="" cols="47" rows="9" placeholder="How can i help?" class="input text-tiny font-normal px-5 py-3 outline-none"></textarea>
        </div>
       </div>
        <div class="py-4">
          <input type="submit"  value="Submit" class="py-3 text-center text-base btn-form font-light outline-none">
        </div>
    </div>
    <div class="lg:w-6/12 w-full items-center justify-center px-5 mt-10 lg:mt-10">
      <h1 class="header2 mb-3">Location</h1>
       <div class="py-2">
         <!-- fix geolocation with vue -->
         <img src="../assets/img/map.png" alt="Location"/>
       </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  metaInfo: {
    title: "Cardio Contact | Heart disease status",
  },
};
</script>
<style lang="scss" scoped>
  .bg-color{
    background-color:#FDF8F4 ;
  }
  .input{
   border-radius:5px;
   background-color:#E5E5E5;
   }
   .btn-form{
    padding: 10px 40px;
    height: 45px;
    border-radius: 10px;
    text-align: center;
    background-color:#0654DB;
    @apply flex;
    @apply text-white;
    @apply font-bold;
  }
  
</style>