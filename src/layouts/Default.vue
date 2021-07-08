<template>
  <div>
    <div
     :class="{ open: isOpen }"
      class="w-full fixed top-0 left-0 justify-between overflow-hidden header lg:px-20 px-5 py-10">
      <span class="mt-2">
        <g-link to="/">
          <p class="logo-style">Cardio</p>
        </g-link>
      </span>
      <div class="hidden lg:flex flex-col lg:flex-row lg:items-center menu">
        <nav class="flex flex-no-wrap lg:ml-20 ml-10 mt-3">
          <div class="py-4 px-8">
            <g-link to="/" class="">Home</g-link>
          </div>
          <div class="py-4 px-8">
            <g-link to="/Contact" class="">Contact</g-link>
          </div>
          <div class="py-4 px-8">
            <g-link to="/Login" class="">Log in </g-link>
          </div>
          <div class="py-3 px-6">
            <g-link to="/Signup" class="btn-primary1"> Sign up </g-link>
          </div>
        </nav>
      </div>
      <a @click.prevent="toggleMenu" href="" class="mobile-menu">
        <i class="uil uil-bars icon-color text-3xl"></i>
      </a>
    </div>
    <div class="flex flex-col items-center w-full slot-holder">
      <div
        :class="{ open: isOpen }"
        @click.self="toggleMenu"
        class="mobile-menu-new-holder">
        <div class="mobile-menu-new">
          <menu>
            <a
              @click.prevent="toggleMenu"
              href=""
              class="text-dark closecon flex w-full justify-end pr-5">
              <i class="uil uil-times text-dark"></i>
            </a>
            <nav>
              <g-link to="/home">Home</g-link>
              <g-link to="/Contact">Contact</g-link>
              <g-link to="/Login">Login</g-link>
              <g-link to="/Signup">Sign up</g-link>
              <g-link to="/Register">Register</g-link>
              <g-link to="/Test">Test Input</g-link>
              <g-link to="/Result">Result</g-link>
            </nav>
          </menu>
        </div>
      </div>
    </div>
    <!-- call body (page) in  -->
    <div class="flex items-center flex-col slot-holder">
      <slot />
    </div>
    <!-- call footer component in -->
    <publicFooter />
  </div>
</template>

<script>
import publicFooter from "../components/footer";

export default {
  components: {
    publicFooter,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss">
@import url('/main.scss');
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" );

body {
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: #FDF8F4 !important;
}

.space-grostek {
  font-family: 'Space Grotesk', sans-serif;
}

.layout {
  margin: 0 auto;
}
.header {
  display: flex;
  align-items: center;
  height: 60px;
  z-index: 9999999;
  background-color:#FDF8F4;
}

.logo-style{
  font-size:23px;
  font-weight:800;
  color:#20375E;
}
nav > div > a, nav > a {
  display: flex;
  padding: 12px 20px;
  color: #000000;
  align-items: center;
  font-style: normal;
  font-size: 15.5px;
  font-weight: 500;
  letter-spacing: 1px;
}

.menu > .menu-links {
  padding: 20px 5px;
}

.menu-backdrop,
.mobile-menu {
  display: none;
}

.mobile-menu-new-holder {
  display: none;
  z-index: 9999999;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  min-width: 100%;
  &.open {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
  }
  .mobile-menu-new {
    position: fixed;
    top: 0;
    width: 250px;
    height: 100vh;
    background: #FDF8F4;
    .menu {
      margin-left: 0;
      padding-left: 0;
    }
    a {
      color: #454545;
    }
  }
}

.slot-holder {
  margin-top: 60px;
}

.closecon {
  display: none;
  visibility: hidden;
  outline: none;
}

.icon-color {
  color:#20375E;
}

@media only screen and (max-width: 768px) {
  .closecon {
    display: flex;
    visibility: visible;
    @apply mb-5;
    @apply text-4xl;
    i {
      padding: 0 !important;
    }
  }
  .mobile-menu {
    display: flex;
    margin-left: 500px;
  }
  .menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    width: 100%;
    margin-right: -100%;
    background-color: #000066;
    color: #fff;
    z-index: 999999;
    padding-top: 30px;
  }
  .menu.open {
    margin-right: 0;
  }
  .menu-backdrop.open {
    display: flex;
    width: 100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
  }
  .social-icons > a {
    padding: 25px 10px;
    @apply text-2xl;
  }
  .menu > .menu-links {
    padding: 25px 20px;
    @apply font-bold;
    @apply text-2xl;
  }
}

@media only screen and (max-width: 425px) {
  .mobile-menu {
    display: flex;
    margin-left: 150px;
  }
}


</style>