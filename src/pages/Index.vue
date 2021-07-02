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
      <div class="flex lg:w-7/12 w-full lg:mt-32 mt-10">
        <img src="../assets/img/heart.png" alt="Heart treament" />
      </div>
    </div> 
    
    <div class="lg:flex  lg:flex-row w-full justify-between px-5 py-5 lg:px-20 lg:py-10 section-2 lg:mt-32 mt-0">
      <div class="lg:flex mt-5 mb-5 lg:mt-0 mx-auto  w-full section-2-box lg:p-10 p-0">
      <div class="lg:w-3/12 w-full image-container lg:mx-12 mx-0  lg:my-0 my-5 flex items-center">
        <img src="../assets/img/heart-beat.png" alt="Heart">
      </div>
      <div class="lg:w-6/12 w-full lg:ml-16  lg:px-0 px-5  text-white">
        <h5 class="py-3 lg:text-3xl text-2xl font-bold">Heart Disease Overview</h5>
        <p class="text-base py-3 leading-relaxed">
          The heart controls the pumping and circulation of blood while clearing harmful waste substances in the body.
        </p>
        <p class="text-base py-5 leading-relaxed">
          Any condition affecting the heart is also called cardiovascular disease (CVDs) and 
          it’s the number 1 cause of death globally, taking an estimate of 17.9 million lives loss each year.
        </p>
      </div>
      </div>
    </div>

    <div class="lg:flex lg:flex-row w-full justify-between px-5 py-5 lg:px-20 section-3 lg:mt-10 mt-0">
      <div class="lg:flex  mt-5 mb-5 lg:mt-0 mx-auto  w-full p-10 ">
      <div class="lg:w-9/12 lg:ml-16 ml-0 w-full ">
        <h5 class="py-3 lg:text-3xl text-2xl font-bold text-color-primary text-center">Causes Of Heart Disease </h5>
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
              <span class="material-icons icon-style">smoking_rooms</span>
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
      <div class="lg:w-3/12 w-full plain-container mx-12 flex items-center"></div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row w-full justify-between px-5 py-5 lg:px-20 lg:py-10 section-2 mt-10">
        <div class="lg:flex mt-5 mb-5 lg:mt-0 lg:mx-auto  w-full section-2-box lg:p-10 p-5">
        <div class="lg:w-3/12 w-full diagnose-container lg:mx-12 mx-1 my-3 lg:my-0 flex items-center"></div>
        <div class="lg:w-8/12 lg:ml-16 ml-0 lg:my-0 my-5 w-full text-center text-white">
          <h5 class="lg:py-3 py-5 lg:text-3xl text-2xl font-bold">Diagnosis Steps For Heart Disease</h5>
          <div class="lg:flex w-11/12">
            <div class="lg:w-6/12 w-full text-left py-5">
              <div class="icon-shape  mb-2 flex">
                <span class="material-icons icon-style">smoking_rooms</span>
              </div>
              <h2 class="font-medium text-lg pb-1">Physical Examination</h2>
              <p class="font-light text-sm leading-5">Changes the heart composition</p>
            </div>
            <div class="lg:w-6/12 w-full text-left py-5">
              <div class="icon-shape  mb-2 flex ">
                <span class="material-icons-outlined">looks_two</span>
              </div>
              <h2 class="font-medium text-lg pb-1">Take medical test</h2>
              <p class="font-light text-sm leading-5">Reduces the elasticity of the artery.</p>
            </div>
          </div>
          <div class="lg:flex w-11/12 lg:my-7 my-1">
            <div class="lg:w-6/12 w-full text-left py-5">
              <div class="icon-shape  mb-2 flex">
                <i class="uil uil-stethoscope-alt text-white text-3xl"></i>
              </div>
              <h2 class="font-medium text-lg pb-1">Get medical result</h2>
              <p class="font-light text-sm leading-5">Changes the heart composition</p>
            </div>
            <div class="lg:w-6/12 w-full text-left  py-5">
              <div class="icon-shape  mb-2 flex ">
                <span class="material-icons-outlined">looks_four</span>
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
          <input type="submit" value="Email Address" class="py-3 lg:w-6/12 w-full text-left px-5 text-tiny input">
        </div> 
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
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





.zl-numbering {
  font-size: 90px;
  margin-top: -30px;
  opacity: 0.4;
  font-family: "Poppins", sans-serif;
  &.green {
    color: green;
  }
}
.sec-2-img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
}
.sec-3-img {
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  @include sm {
    height: auto;
  }
}
.instructor-led-image {
  height: 600px;
  object-fit: contain;
  @include sm {
    height: auto;
  }
}
.self-pace-image {
  height: 500px;
  object-fit: contain;
  @include sm {
    height: auto;
    margin-bottom: 15px;
  }
}
.df-ul {
  li {
    width: 300px;
    height: 330px;
    // @apply bg-white;
    padding: 20px;
    border-radius: 10px;
    margin: 15px;
    @include sm {
      width: 100%;
    }
  }
}
.section-6 {
  height: 400px;
  background: #000066;
  border-radius: 10px;
  @include sm {
    height: auto;
  }
}
.testimonial-card {
  box-shadow: 0px 27px 127px rgba(0, 0, 0, 0.07),
    0px 11.28px 53.0576px rgba(0, 0, 0, 0.0503198),
    0px 6.0308px 28.3671px rgba(0, 0, 0, 0.0417275),
    0px 3.38082px 15.9024px rgba(0, 0, 0, 0.035),
    0px 1.79553px 8.44563px rgba(0, 0, 0, 0.0282725),
    0px 0.747159px 3.51442px rgba(0, 0, 0, 0.0196802);
  border-radius: 10px;
  @include sm {
    width: 100%;
    height: auto;
  }
}
.quick-solve-box {
  @apply ml-20;
  padding: 15px;
  height: 450px;
  box-shadow: 0px 27px 127px rgba(0, 0, 0, 0.07),
    0px 11.28px 53.0576px rgba(0, 0, 0, 0.0503198),
    0px 6.0308px 28.3671px rgba(0, 0, 0, 0.0417275),
    0px 3.38082px 15.9024px rgba(0, 0, 0, 0.035),
    0px 1.79553px 8.44563px rgba(0, 0, 0, 0.0282725),
    0px 0.747159px 3.51442px rgba(0, 0, 0, 0.0196802);
  border-radius: 10px;
  @include sm {
    width: 100%;
    height: auto;
  }
}
.cs-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.cs-1 {
  display: flex;
  width: 60px;
  height: 120px;
  background: linear-gradient(180deg, #8000ff 0%, rgba(66, 0, 255, 0.53) 100%);
  border-radius: 40px;
  margin: 11px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  &.yel {
    height: 156px;
    background: linear-gradient(
      180deg,
      #ff6600 0%,
      rgba(255, 222, 201, 0.53) 100%
    );
  }
  &.red {
    height: 156px;
    background: linear-gradient(
      180deg,
      #ff003d 0%,
      rgba(255, 0, 199, 0.53) 100%
    );
  }
}
// .section-4 {
//   background: #f1faff;
// }
.square-img {
  object-fit: contain;
}
.main-text {
  font: normal normal bolder 42px/50px Mulish;
  letter-spacing: 1.8px;
  @include sm {
    display: block;
    font: normal normal bolder 32px/40px Mulish;
    margin-bottom: 9px;
  }
}
.quote-me::before {
  content: '"';
  display: flex;
  align-items: flex-start;
  font-size: 60px;
  width: 40px;
  height: 40px;
  color: #b1b1b1;
  margin-right: 5px;
  transform: rotate(180deg);
  font-family: "Coiny", cursive;
}

.hr-header {
  // @apply bg-white;
  position: relative;
  height: 600px;
  margin-top: 20px;
  @include sm {
    height: 100vh;
  }
}

ul.course-items > li {
  list-style: none;
}
.course-items {
  font: normal normal bold 18px/40px Mulish;
  letter-spacing: 0px;
  color: #4d4d72;
  text-transform: uppercase;
  height: 120px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 30px #0000001f;
  position: relative;
  bottom: 60px;
}

.list-text {
  letter-spacing: 0px;
}

.list-text > li {
  height: 40px;
}
.list-text > :first-child {
  background-image: url("../assets/img/playlist.png");
  background-repeat: no-repeat;
  line-height: 30px;
  padding-left: 50px;
}

.list-text > :nth-child(2) {
  background-image: url("../assets/img/person.png");
  background-repeat: no-repeat;
  line-height: 30px;
  padding-left: 50px;
}

.list-text > :nth-child(3) {
  // background-image: url("../assets/img/romper-code.png");
  background-repeat: no-repeat;
  line-height: 30px;
  padding-left: 50px;
}

.list-text > :last-child {
  // background-image: url("../assets/img/user-account.png");
  background-repeat: no-repeat;
  line-height: 30px;
  padding-left: 50px;
}

.title-text2 {
  font: normal normal bold 35px/29px Mulish;
  letter-spacing: 1.8px;
}

.subtitle-text2 {
  font: normal normal 700 16px/25px Mulish;
  letter-spacing: 0px;
}
.border-style {
  border: 1px solid #707070;
  background: #ffffff 0% 0% no-repeat padding-box;
  font: normal normal bold 16px/30px Mulish;
  letter-spacing: 0px;
  color: #000066;
}

.card {
  height: 200px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}

.img-size {
  width: 50px;
  height: 50px;
}

.rating-img {
  width: 100px;
  height: 20px;
}

.profile-title {
  font: normal normal bold 17px/25px Mulish;
  letter-spacing: 0px;
  color: #000066;
}
.testimonial-nav {
  span {
    display: flex;
    width: 33px;
    height: 4px;
    border-radius: 2px;
    background: #d6d6d6;
    margin: 0 10px;
    cursor: pointer;
    &:nth-child(1) {
      margin-left: 0;
    }
    &.active {
      width: 20px;
      @apply bg-primary;
    }
  }
}
.comment-card {
  border-radius: 7px;
  overflow: hidden;
  border: 1px solid #ececec;
  width: 497px;
  @include sm {
    width: 97%;
  }
  span {
    background-color: #fbab7e;
    background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
    padding: 15px;
    img {
      width: 40px;
      object-fit: contain;
    }
    &.two {
      background-color: #ff9a8b;
      background-image: linear-gradient(
        90deg,
        #ff9a8b 0%,
        #ff6a88 55%,
        #ff99ac 100%
      );
    }
    &.three {
      background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    }
  }
  display: flex;
  background: #ffffff;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.3);
  }
}
</style>