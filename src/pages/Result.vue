<template>
<layout>
<div class="w-full flex flex-col flex-no-wrap h-screen bg-color">
  <!-- <div class="lg:px-20 px-5 py-8">
    <g-link to="/">
          <p class="logo-style">Cardio</p>
    </g-link>
  </div> -->
  <div class=" w-full mx-auto lg:px-12 px-0">
    <div class="lg:w-8/12 w-full mx-auto items-center justify-center result-card px-5 py-5 ">
      <div class="text-center mb-2">
         <h1 class="header3 py-2 px-12">Test result</h1>
         <p>The system predicted that <span> {{patientname}}</span>  does not have heart disease.</p>
      </div>
       <div class="text-center mb-2">
         <h1 class="header3 py-2 px-12">Accuracy of the algorithm used are:</h1>
         <div class="section-accuracy lg:w-8/10 w-full mx-auto flex">
            <div class="w-6/12">
               <p class="py-1 px-3">Naive Bayes: <span class="header4"> {{naiveResult}} </span></p>
               <p class="py-1 px-3">Support vector machine: <span class="header4"> {{supportResult}} </span></p>
            </div>
             <div class="w-6/12">
               <p class="py-1 px-3">Decision Tree: <span class="header4"> {{decisionResult}}</span></p>
               <p class="py-1 px-3">K-nearest neighbor: <span class="header4">  {{nearestResult}} </span></p>
             </div>
         </div>
      </div>
    </div>
    <div class="lg:w-9/12 mx-auto mt-12 lg:flex px-5 lg:px-0 py-5 lg:py-0">
      <div class="notify-card lg:w-6/12 w-full px-5 py-3 text-white lg:mr-32 mr-0">
         <h1 class="header3 py-1"> Gaurdians message</h1>
         <p> <span>{{patientname}}</span> heart status : Heart disease is present. Visit the cardiac department for immediate treatment.</p>
          <div class="py-3 flex justify-end">
            <button  class="text-center text-base btn-notify text-black font-light outline-none">
               <p>Send</p>
            </button>
        </div>
      </div>
       <div class="notify-card lg:w-6/12 w-full px-5 py-3 text-white mt-8 lg:mt-0">
         <h1 class="header3 py-1">Cardiologist report</h1>
         <p> <span>{{patientname}}</span> heart status: Heart disease is present. Prepare treatment for patient. Meet your doctor!</p>
          <div class="py-3 flex justify-end">
            <button  class="text-center text-base btn-notify text-black font-light outline-none">
               Notify
            </button>
        </div>
      </div>
    </div>
  </div>
</div>
</layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Cardio Result | Heart disease status",
  },
  data: function () {
    return {
      patientname : "Adegbomojo Faith",
      naiveResult: "80%",
      supportResult: "82%",
      decisionResult: "90%",
      nearestResult: "92%",
    }
  },
};
</script>
<style lang="scss" scoped>
   .btn-notify{
    padding: 10px 40px;
    height: 45px;
    border-radius: 10px;
    text-align: center;
    background-color:#ffffff;
    @apply flex;
    @apply font-bold;
  }
  .result-card{
     background-color: #ffffff;
     border-radius:10px;
   //   box-shadow: 0px, 4px, 4px rgba(#000 0.5);
  }
  .notify-card{
      background-color:#0654DB;
      border-radius:10px;
  }
  
</style>