<template>
  <Layout>
    <div class="w-full flex lg:flex-row justify-center items-center section-1 lg:px-20 px-5 py-10 ">
      <div class="flex flex-col flex-nowrap lg:w-5/12 w-full">
        <h1 class="mb-6 header1 inline">
         Healthy heart for good living
        </h1>
        <p class="p-text">We give insight about your heart status,<br/> and educate people on heart disease</p>
        <div class="flex mt-8">
            <g-link to="/Signup" class="btn-primary2"> Explore </g-link>
        </div>
      </div>
      <div class="flex lg:w-7/12 w-full lg:mt-32 mt-10">
        <img src="../assets/img/heart.png" alt />
      </div>
    </div> 
    <div class="flex flex-col lg:flex-row w-full justify-between px-5 py-5 lg:px-20 lg:py-10 section-2 mt-32">
      <div class="flex  mt-5 mb-5 lg:mt-0 mx-auto  w-full section-2-box p-10 ">
      <div class="lg:w-3/12 w-full image-container mx-12">
      </div>
      <div class="lg:w-9/12  w-full text-container ">
        <h5 class="header5 text-secondary">Data is Power. Knowledge is Power</h5>
        <p>
          Data has and will always be everywhere – but data professionals are scarce.
          The opportunities in the data professionals are enormous-in large and small organizations, NGOs, academia, et cetera. Data professionals are needed everywhere. NOW is the best time to begin a journey to becoming a certified data professional.
          Choose from hundreds of courses on our platform on Excel |Python | R | Power BI | Tableau | SQL | SPSS
        </p>
        </div>
      </div>
    </div>

     <!--  
    <div
      class="w-full flex flex-col-reverse lg:flex-row-reverse lg:px-20 items-center lg:justify-between px-5 py-10 lg:py-10"
    >
      <div class="lg:w-5/12 w-full">
        <div class="relative">
          <div class="zl-numbering green -mb-5">
            <h1>01</h1>
          </div>
          <h2 class="mb-6 header2 relative">
            <i class="text-secondary">Self pace</i> courses
          </h2>
        </div>
        <p
          class="text-gray-800 text-base"
        >Our definition of learning flexibility is accessibility- anywhere, anytime, and on any device. Explore our course catalog for self-paced recorded courses which you can at your pace and convenience. With a one-time purchase, gain a life-time access to self-paced courses and learn both on desktop and mobile.</p>
        <div class="flex justify-left align-center mt-8">
          <a class="btn-primary" href>Explore</a>
        </div>
      </div>
      <div>
        <img class="self-pace-image lg:-ml-10" src="/self-paced.png" alt="instrutor led courses" />
      </div>
    </div>
    
    <div
      class="w-full flex flex-col-reverse lg:flex-row lg:px-20 items-center lg:justify-between px-5 py-10 lg:py-10"
    >
      <div class="lg:w-5/12 w-full h-full lg:pt-10">
        <div class="relative">
          <div class="zl-numbering green -mb-5">
            <h1>02</h1>
          </div>
          <h2 class="mb-6 header2">
            <i class="text-secondary">Instructor-Led</i> Programs
          </h2>
        </div>
        <p
          class="text-gray-800 text-base"
        >Do you learn best interacting live with instructors and other learners? Our Instructor-Led Programs are ideal for learners that prefer a one-on-one interaction and live classes. Join live-classes, ask and get answers to your questions in real-time, and personalized feedbacks on assignments and projects</p>
        <div class="flex justify-left align-center mt-8">
          <a class="btn-primary" href>Explore</a>
        </div>
      </div>
      <div>
        <img class="instructor-led-image" src="/kkk.png" alt="instrutor led courses" />
      </div>
    </div>
    
    <div
      class="w-full flex flex-col lg:px-20 bg-blue-100 items-end lg:justify-between px-5 py-10 lg:pt-10 overflow-hidden relative"
    >
      <div class="lg:w-5/12 w-full h-full lg:pt-10 lg:absolute left-0 quick-solve-box">
        <div class="relative">
          <div class="zl-numbering green -mb-5">
            <h1>03</h1>
          </div>
          <h2 class="mb-6 header2">
            <i class="text-secondary"></i> QuickSolve
          </h2>
        </div>
        <p
          class="text-gray-800 text-sm"
        >Sometimes you just need an expert to solve your specific problems or answer your questions, and that’s what the ZR QUIKSOLVE solution is all about. We understand that learning never stops even as a data professional, you might get stuck once in a while and need real-time help on some data projects. You post your data questions, and we answer as soon quick as possible OR connect you with one of our instructors for one-on-one assistance.</p>
        <div class="flex justify-left align-center mt-8">
          <a class="btn-primary" href>Explore</a>
        </div>
      </div>
      <div class="lg:-mb-24">
        <img class="instructor-led-image" src="/quick-solve.png" alt="instrutor led courses" />
      </div>
    </div>
    
    <div
      class="flex flex-col lg:flex-row-reverse w-full justify-between px-5 lg:px-20 lg:items-center lg:my-20 my-10"
    >
      <div class="w-full lg:w-6/12">
        <img class="sec-3-img w-full" src="/code-academy.jpeg" alt />
      </div>
      <div class="flex flex-col mt-5 lg:mt-0 flex-nowrap lg:mr-20 lg:w-4/12">
        <div class="relative">
          <div class="zl-numbering green -mb-5">
            <h1>04</h1>
          </div>
          <h1 class="header2 mb-6">
            CodeCamp
          </h1>
        </div>
        <p>
          Coding and programming are non-negotiable in the data profession- especially for data science, data engineering, and machine learning. Use our CodeCamp to brush up your programming skills 
        </p>
        <p>Coming soon</p>
      </div>
    </div>
    
    <div class="w-full lg:px-20 px-5 lg:py-20 py-10 lg:mb-56">
      <div class="section-6 p-5 lg:p-20 justify-between flex flex-col-reverse lg:flex-row w-full">
        <div class="w-full lg:w-5/12">
          <h1 class="header2 text-white">Our student love us and our strategies</h1>
          <div>
            <div class="px-6 testimonial-card mt-16 py-10">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, similique eos ipsam voluptate incidunt saepe amet magnam a doloremque dolor tempore delectus ratione dolore quas corporis eum! Eveniet, culpa consequatur!</p>
              <div class="flex flex-nowrap mt-5 items-center">
                <img class="cs-img" src="/asw.jpg" alt />
                <span class="pl-5">
                  <p class="font-bold text-primary">Dele Ali</p>
                  <p class="text-sm">Data science incubator</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="cs-1">
            <img src="/222.jpeg" alt />
          </div>
          <div class="cs-1 yel items-end">
            <img src="/222.jpeg" alt />
          </div>
          <div class="flex flex-col flex-nowrap items-center">
            <img class="cs-img" src="/222.jpeg" alt />
            <div class="cs-1 red"></div>
          </div>
        </div>
      </div>
    </div> -->
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
}
.section-2 {
  .section-2-box{
    height:500px;
    border-radius:20px;
    background-color: #0654DB;
    .image-container{
      height: 400px;
      background-color: #fff;
      border-radius: 15px;
    }
  }
}


i.underlined {
  position: relative;
  width: auto;
  font-style: normal;
  &::after {
    content: " ";
    display: inline;
    position: absolute;
    left: 0;
    bottom: -80%;
    width: 100%;
    height: 100%;
    background: url("/underline.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  &.ulong::after {
    background: url("/underline-long.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
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