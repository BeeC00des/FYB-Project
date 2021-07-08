<template>
<div class="w-full flex flex-col flex-no-wrap h-screen bg-color">
  <div class="lg:px-20 px-5 py-8">
    <g-link to="/">
          <p class="logo-style">Cardio</p>
    </g-link>
  </div>
  <div class="lg:flex w-11/12 mx-auto lg:px-12 px-3">
    <div class="lg:w-6/12">
      <h1 class="header2 mb-3 lg:px-12 px-3">Kindly fill the form below</h1>
      <div class="input-section lg:w-10/12 w-full mx-auto">
        <div class="py-4 lg:flex">
         <input type="text" id="textInput" placeholder="Age" class="py-3 lg:w-6/12 w-full px-5 text-tiny input font-normal outline-none lg:mr-12 mr-0 lg:mb-0 mb-10">
         <input type="text" id="textInput" placeholder="Last Name" class="py-3 lg:w-6/12 w-full px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-4">
          <input type="text" id="textInput" placeholder="Personal Contact" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
         <div class="py-4">
            <input type="text" id="textInput" placeholder="History of present illness" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
         </div>
         <div class="py-4">
          <input type="text" id="textInput" placeholder="Underlying medical aliment" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
         <div class="py-4">
          <input type="text" id="textInput" placeholder="Last visit for diagnosis" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
      </div>
      <div class="lg:py-4 py-0 px-12 submit-btn">
         <input type="submit"  value="Submit" class="py-3 text-center text-base btn-form font-light outline-none">
      </div>
    </div>
    <div class="lg:w-6/12 w-full">
      <div class="input-section lg:w-10/12 w-full mx-auto lg:mt-12">
       <div class="py-4">
          <input type="text" id="textInput" placeholder="Guardian's Fullname" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
       <div class="py-4">
          <input type="text" id="textInput" placeholder="Guardian's Email Address" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-4">
          <input type="text" id="textInput" placeholder="Guardian's Phone Number" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-4">
          <input type="text" id="textInput" placeholder="Recent ocurrence of illness" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-4">
          <input type="text" id="textInput" placeholder="Last treatment given" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
      </div>
    </div>
    
  </div>
    <div class="py-4 px-6 lg:hidden">
        <input type="submit"  value="Submit" class="py-3 text-center text-base btn-form font-light outline-none">
    </div>
</div>
</template>

<script>
export default {
  metaInfo: {
    title: "Cardio Registration| Heart disease status",
  },
};
</script>
<style lang="scss" scoped>
  .submit-btn{
    @include sm{
      display:none;
    }
  }
  
</style>