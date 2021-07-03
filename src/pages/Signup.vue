<template>
<div class="w-full lg:flex  lg:flex-row flex-col flex-no-wrap lg:h-screen h-auto">
   <div class="lg:w-4/12 w-full bg-color1">
      <div class="lg:px-20 px-5 py-8">
         <g-link to="/">
               <p class="logo-style">Cardio</p>
         </g-link>
      </div>
      <div class="lg:px-20 px-5 flex login-description items-center justify-left lg:mt-20">
          <p class="text-3xl font-bold text-white lg:mb-0 mb-10">Few clicks away from checking your heart status result.</p>
      </div>
   </div>
   <div class="lg:w-8/12 w-full flex items-center justify-left bg-color2 lg:px-5 px-2">
   <div class="w-full lg:mx-10 mx-0">
      <h1 class="header2 mb-8 lg:mt-0 mt-10 px-5">Sign up</h1>
      <div class="input-section w-full px-5">
        <div class="py-6 lg:flex lg:w-11/12 w-full">
         <input type="text" id="textInput" placeholder="First Name" class="py-3 w-full px-5 text-tiny input font-normal outline-none lg:mr-12 mr-0 lg:mb-0 mb-10">
         <input type="text" id="textInput" placeholder="Last Name" class="py-3 w-full px-5 text-tiny input font-normal outline-none">
        </div>
      <div class="py-6 lg:flex lg:w-11/12 w-full">
         <input type="email" id="textInput" placeholder="Email Address" class="py-3 w-full px-5 text-tiny input font-normal outline-none lg:mr-12 mr-0 lg:mb-0 mb-10">
         <select name="usertype" class="py-3 w-full px-5 text-tiny input font-normal outline-none">
            <option class="py-2 px-2" value="" disabled selected hidden>Category</option>
            <option>Patient</option>
            <option>Medical Practioner</option>
            <option>Technician</option>
         </select>
        </div>
        <div class="py-6 lg:flex lg:w-11/12 w-full">
         <input type="password" id="textInput" placeholder="Password" class="py-3 w-full px-5 text-tiny input font-normal outline-none lg:mr-12 mr-0 lg:mb-0 mb-10">
         <input type="password" id="textInput" placeholder="Confirm password" class="py-3 w-full px-5 text-tiny input font-normal outline-none">
        </div>
       </div>
        <div class="py-10 px-5">
          <input type="submit"  value="Submit" class="py-3 text-center text-base btn-form font-light outline-none">
        </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
  metaInfo: {
    title: "Cardio signup | Heart disease status",
  },
};
</script>
<style lang="scss" scoped>
   .logo-style{
      color:#fff;
   }
   .bg-color1{
    background-color:#0654DB;
   }
  .bg-color2{
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