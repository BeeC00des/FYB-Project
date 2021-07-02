<template>
  <div class="flex w-full justify-center lg:px-40 flex-col">
    <h1 class="text-center font-bold text-xl lg:text-3xl text-black-500 pb-5"> Course Outline</h1>
    <ClientOnly>
    <carousel class="flex justify-center" :per-page-custom="[[320, 1], [1020, 3]]"
      :mouse-drag="false">
      <slide v-for="item in items" :key="item.id">
        <div class="flex itemCard">
          <div class="p-5">
            <p class="font-semi text-xs uppercase tracking-widest text-gray-800 mb-2">{{ item.duration }}</p>
            <p class="font-semibold text-2xl text-dark pb-5">{{item.tag }}</p>
            <ul class="checklist">
              <li class=" list-disc list-outside ml-3 py-1" v-for="outline in item.outline" :key="outline.id">
                {{outline}}
              </li>
            </ul>
          </div>
        </div>
      </slide>
    </carousel>
    </ClientOnly>
  </div>
</template>
<style lang="scss">
  $vue-blue: #000066;
  $gray: #666a73;
  $light-gray: #f8f8f8;
  $vue-black:#000000;

  body {
    font-family: 'Source Sans Pro', sans-serif; 
  }
  .itemCard {
    width: 330px;
    height: 350px;
    overflow-y: auto;
    margin: 0 10px;
    cursor: pointer;
    @apply shadow-lg;
    border: 1px solid #d1d1d1;
    background-color: #fff;
    border-radius: 5px;
    @include sm {
      width: 90%;
      margin: 15px;
    }
  }
</style>

<script>

export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
  components: {
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 360,
    }
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length  - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  }
}
</script>