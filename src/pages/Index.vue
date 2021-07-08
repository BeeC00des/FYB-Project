<template>
  <Layout>
    <div class="w-full lg:flex lg:flex-row justify-center items-center section-1 lg:px-20 px-5 py-10 ">
      <div class="lg:flex flex-col flex-nowrap lg:w-5/12 w-full">
        <h1 class="mb-6 header1">
         Healthy heart for good living
        </h1>
        <p class="p-text">
        We give insight about your heart status,<br/> 
        and educate people on heart disease</p>
        <div class="flex mt-8">
            <g-link to="/Signup" class="btn-primary2"> Explore </g-link>
        </div>
      </div>
      <div class="flex lg:w-7/12 w-full lg:mt-32 mt-3">
        <img src="../assets/img/heart.png" alt="Heart treament" />
      </div>
    </div> 
    
    <div class="lg:flex  lg:flex-row w-full justify-between px-5 py-5 lg:px-20 lg:py-10 section-2 lg:mt-32 mt-0">
      <div class="lg:flex mt-5 mb-5 lg:mt-0 mx-auto  w-full section-2-box lg:p-10 p-0">
      <div class="lg:w-3/12 w-full image-container lg:mx-12 mx-0  lg:my-0 my-5 flex items-center">
        <img src="../assets/img/heart-beat.png" alt="Heart" class="img-heart">
      </div>
      <div class="lg:w-6/12 w-full lg:ml-16  lg:px-0 px-5 text-white">
        <h5 class="lg:text-3xl text-2xl font-bold">Heart Disease Overview</h5>
        <p class="text-base py-3 leading-relaxed">
          The heart controls the pumping and circulation of blood while clearing harmful waste substances in the body.
        </p>
        <p class="text-base py-3 leading-relaxed">
          Any condition affecting the heart is called Heart Disease. It is also known as cardiovascular disease (CVDs). 
          It’s the number 1 cause of death globally, taking an estimate of 17.9 million lives loss each year.
        </p>
        <h5 class="lg:text-2xl text-lg font-bold">Heart Disease Symptoms</h5>
        <p class="text-base py-3 leading-relaxed">
          Chest pain, difficulty in breathing, fatigue and lightheadedness, swelling due to fluid retention, irregular heart beat, nausea, choking sensation.
        </p>
      </div>
      </div>
    </div>

    <div class="lg:flex lg:flex-row w-full justify-between px-5 py-5 lg:px-20 section-3 lg:mt-10 mt-0">
      <div class="lg:flex  lg:mt-5 mt-2 mb-5 lg:mt-0 mx-auto  w-full lg:p-10 p-5">
      <div class="lg:w-9/12 lg:ml-16 ml-0 w-full ">
        <h5 class="lg:pb-7 pb-3 lg:text-3xl text-2xl font-bold text-color-primary lg:text-center text-center">Causes Of Heart Disease </h5>
        <div class="lg:flex w-11/12">
          <div class="lg:w-4/12 w-full text-left py-5">
            <div class="icon-shape icon-color1 mb-2 flex justify-center items-center">
              <span class="material-icons icon-style">smoking_rooms</span>
            </div>
            <h2 class="font-medium text-lg pb-1">Smoking</h2>
            <p class="font-light text-sm text-color-secondary leading-5">Changes the heart composition</p>
          </div>
          <div class="lg:w-4/12 w-full text-left lg:px-5 px-0 py-5">
            <div class="icon-shape icon-color2 mb-2 flex justify-center items-center">
              <span class="material-icons icon-style">smoking_rooms</span>
            </div>
            <h2 class="font-medium text-lg pb-1">Poor Diet</h2>
            <p class="font-light text-sm text-color-secondary leading-5">Blocks the arteries with plaque</p>
          </div>
          <div class="lg:w-4/12 w-full text-left lg:px-5 px-0  py-5">
            <div class="icon-shape icon-color1 mb-2 flex justify-center items-center">
              <i class="uil uil-medical-drip icon-style"></i>
            </div>
            <h2 class="font-medium text-lg pb-1">High Blood Pressure </h2>
            <p class="font-light text-sm text-color-secondary leading-5">Reduces the elasticity of the artery.</p>
          </div>
        </div>
        <div class="lg:flex w-11/12">
          <div class="lg:w-4/12 w-full text-left lg:pr-5 pr-0 py-5">
            <div class="icon-shape icon-color2 mb-2 flex justify-center items-center">
              <span class="material-icons icon-style">smoking_rooms</span>
            </div>
            <h2 class="font-medium text-lg pb-1">Obesity</h2>
            <p class="font-light text-sm text-color-secondary leading-5">Causes blood to be supppy to the heart</p>
          </div>
          <div class="lg:w-4/12 w-full text-left lg:px-5 px-0 py-5">
            <div class="icon-shape icon-color1 mb-2 flex justify-center items-center">
              <span class="material-icons icon-style">smoking_rooms</span>
            </div>
            <h2 class="font-medium text-lg pb-1">High cholesterol</h2>
            <p class="font-light text-sm text-color-secondary leading-5">Walls are build up the in arteries</p>
          </div>
          <div class="lg:w-4/12  w-full text-left lg:px-5 px-0 py-5">
            <div class="icon-shape icon-color2 mb-2 flex justify-center items-center">
              <span class="material-icons icon-style">smoking_rooms</span>
            </div>
            <h2 class="font-medium text-lg pb-1">Diabetes</h2>
            <p class="font-light text-sm text-color-secondary leading-5">Damage blood vessel and nerve</p>
          </div>
        </div>
      </div>
      <div class="lg:w-3/12 w-full plain-container mx-12 flex items-center">
          <img src="../assets/img/heart-beat.png" alt="Heart">
      </div>
        
      </div>
    </div>

    <div class="flex flex-col lg:flex-row w-full justify-between px-5 py-5 lg:px-20 lg:py-10 section-2 mt-10">
        <div class="lg:flex mt-5 mb-5 lg:mt-0 lg:mx-auto w-full section-2-box lg:p-10 p-5">
        <div class="lg:w-3/12 w-full diagnose-container lg:mx-12 mx-0 my-3 lg:my-0 flex items-center"></div>
        <div class="lg:w-8/12 lg:ml-16 ml-0 lg:my-0 my-5 w-full text-center text-white">
          <div class="lg:w-10/12">
            <h5 class="lg:py-3 py-5 lg:text-3xl text-2xl font-bold">Diagnosis Steps For Heart Disease</h5>
          </div>
          <div class="lg:flex w-11/12">
            <div class="lg:w-6/12 w-full text-left py-5">
              <div class="mb-2 flex">
                <span class="icon-style-number">01</span>
              </div>
              <h2 class="font-medium text-lg pb-1">Physical Examination</h2>
              <p class="font-light text-sm leading-5">Changes the heart composition</p>
            </div>
            <div class="lg:w-6/12 w-full text-left py-5">
              <div class="mb-2 flex ">
                 <span class="icon-style-number">02</span>
              </div>
              <h2 class="font-medium text-lg pb-1">Take medical test</h2>
              <p class="font-light text-sm leading-5">Reduces the elasticity of the artery.</p>
            </div>
          </div>
          <div class="lg:flex w-11/12 lg:my-7 my-1">
            <div class="lg:w-6/12 w-full text-left py-5">
              <div class="mb-2 flex">
                 <span class="icon-style-number">03</span>
              </div>
              <h2 class="font-medium text-lg pb-1">Get medical result</h2>
              <p class="font-light text-sm leading-5">Changes the heart composition</p>
            </div>
            <div class="lg:w-6/12 w-full text-left  py-5">
              <div class="mb-2 flex ">
                 <span class="icon-style-number">04</span>
              </div>
              <h2 class="font-medium text-lg pb-1">Start treament</h2>
              <p class="font-light text-sm leading-5">Reduces the elasticity of the artery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full justify-center items-center px-5 py-5 lg:px-20 section-3 my-5">
      <div class="lg:w-9/12 mx-auto w-full">
        <h5 class="pb-3 text-3xl font-bold text-center ">Stay Updated</h5>
        <p class="p-text  text-center">Join our mailing list for vital heart information</p>
        <div class="flex items-center justify-center py-5">
          <input type="text" value="Email Address" class="py-3 lg:w-6/12 w-full text-left px-5 text-tiny input">
        </div> 
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home page | Cardio heart disease status",
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Coiny&display=swap");

html {
  scroll-behavior: smooth;
}
.header1 {
    font-size: 48px;
    @include sm {
      font-size: 32px;
    }
}

.section-1 {
  height: 500px;
  margin-top: 30px;
  @include sm {
    height: auto;
    margin-top: 0px;
  }
}
.p-text{
  color:rgba(32, 55, 94, 0.75);
  line-height:28px;
  @include sm {
    line-height:22px;
    font-size: 15px;
  }
}
.section-2 {
  .section-2-box{
    height:500px;
    border-radius:20px;
    background-color: #0654DB;
    .image-container{
      height: 400px;
      background-color: #ffffff;
      border-radius: 15px;
    }
     @include sm {
        height:auto;
     } 
  } 
}



.section-3{
  .plain-container{
      height: 400px;
      border-radius: 15px;
      background-color: #0654DB;
       @include sm {
        display:none;
     } 
    }
    .icon-shape{
      height:35px;
      width:35px;
      border-radius:7px; 
    }
    .icon-style{
      color:white;
      font-size:22px;
    }
    .icon-color1{
      background-color: #0654DB;
      box-shadow:0, 0, 4px, #0654DB;
    }
    .icon-color2{
      background-color: #CA4747;
      box-shadow:0, 0, 4px, #CA4747;
    }
   @include sm {
        height:auto;
     } 
}
 .icon-style-number{
      color:white;
      font-size:30px;
      font-weight:bold;
    }

.diagnose-container{
  height: 400px;
  background-image:url(../assets/img/diagnosis.jpg);
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  border-radius: 15px;
}

.input{
  border-radius:10px;
  background-color:#E5E5E5;
}
</style>