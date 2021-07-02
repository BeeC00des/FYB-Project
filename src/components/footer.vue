<template>
  <footer class="flex flex-col lg:flex-row items-center lg:items-start overflow-hidden w-full">
    <div class="flex flex-col w-full">
      <div
        class="flex w-full lg:px-20 px-5 justify-between flex-col lg:flex-row items-center lg:items-start py-6 border-t border-gray-300">
        <div
          class="flex flex-col items-center lg:items-start text-sm mt-5 lg:mt-0 lg:w-9/12 lg:mr-20">
          <span>
            <g-link to="/">
              <p class="logo-style mb-1">Cardio</p>
            </g-link>
          </span>
          <p class="footer-text">
            Know your heart status, and <br>
            learn about heart disease
          </p>
        </div>
        <div class="flex flex-col items-center lg:items-start text-sm mt-5 w-full px-5 lg:w-3/12 lg:mt-0 lg:mr-8">
          <g-link to="/Signup" class="social-media flex my-2 justify-center items-center">
            <i class="uil uil-facebook-f social-media-box"></i> 
            <span class="ml-3 font-medium icon-text">Facebook</span>
          </g-link>

          <g-link to="/" class="social-media flex my-2 justify-center items-center">
            <i class="uil uil-instagram-alt social-media-box "></i>
            <span class="ml-3 font-medium icon-text">Instagram</span>
          </g-link>
          
          <g-link to="/Signup" class="social-media flex my-2 justify-center items-center">
            <i class="uil uil-twitter social-media-box"></i>
            <span class="ml-3 font-medium icon-text">Twitterrr</span>
          </g-link>
    
        </div>
      </div>
      <div class="lg:px-20 text-sm px-5 flex flex-col lg:flex-row justify-between lg:items-right items-center pb-5 pt-3">
        <div>
          <p class="text-gray-600 text-sm">&copy;Project2021.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">

.footer-text{
  color:rgba(32, 55, 94, 0.75);
  line-height:27px;
}
.social-media{
  .social-media-box{
    padding:3px 3px;
    border-radius:5px;
    background-color: #20375E;
    color:#fff;
  }
  .icon-text{
    color:#000000;
  }
}

.social-media:hover{
  .social-media-box{
  background-color:#CA4747;
  }
  .icon-text{
  color:#CA4747;
  }
}

</style>