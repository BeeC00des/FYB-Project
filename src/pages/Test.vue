<template>
<div class="w-full flex flex-col flex-no-wrap h-screen bg-color">
  <div class="lg:px-20 px-5 py-8">
    <g-link to="/">
          <p class="logo-style">Cardio</p>
    </g-link>
  </div>
  <div class="lg:flex w-11/12 mx-auto lg:px-12">
    <div class="lg:w-6/12 w-full">
      <h1 class="header2 mb-3 px-12">Enter test result</h1>
      <div class="input-section px-3 lg:w-10/12 w-full mx-auto">
        <div class="py-4 lg:flex">
         <input type="text" id="textInput" placeholder="Trestbps" class="py-3 lg:w-6/12 w-full px-5 text-tiny input font-normal outline-none lg:mr-12 mr-0 lg:mb-0 mb-10">
         <input type="text" id="textInput" placeholder="Chol" class="py-3 lg:w-6/12 w-full px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-4">
          <input type="text" id="textInput" placeholder="Restecg" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
         <div class="py-4">
            <input type="text" id="textInput" placeholder="Thalach" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
         </div>
         <div class="py-4">
          <input type="text" id="textInput" placeholder="Old peak" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
         <div class="py-4">
          <input type="text" id="textInput" placeholder="Thal" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
      </div>
      <div class="lg:py-4 py-0 px-16 submit-btn " >
         <input type="submit"  value="Submit" class="py-3 text-center text-base btn-form font-light outline-none">
      </div>
    </div>
    <div class="lg:w-6/12">
      <div class="input-section px-3 lg:w-10/12 w-full mx-auto lg:mt-12">
       <div class="py-4 lg:flex">
         <input type="text" id="textInput" placeholder="fbs" class="py-3 lg:w-6/12 w-full px-5 text-tiny input font-normal outline-none lg:mr-12 mr-0 lg:mb-0 mb-10">
         <input type="text" id="textInput" placeholder="Ca" class="py-3 lg:w-6/12 w-full px-5 text-tiny input font-normal outline-none">
        </div>
       <div class="py-4">
          <input type="text" id="textInput" placeholder="Constrictive pericarditis (CP)" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-4">
          <input type="text" id="textInput" placeholder="Exang" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-4">
          <input type="text" id="textInput" placeholder="Slope" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
        </div>
        <div class="py-4">
          <input type="text" id="textInput" placeholder="Target" class="py-3 w-full  px-5 text-tiny input font-normal outline-none">
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
    title: "Cardio Test Input | Heart disease status",
  },
};
</script>
<style lang="scss" scoped>
  
</style>