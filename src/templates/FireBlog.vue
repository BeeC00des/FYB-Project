<template>
  <Layout>
    <div class="flex flex-col my-20 px-5 md:px-10 lg:px-20 w-full lg:w-9/12">
      <div class="flex flex-col items-center">
        <h1
          class="flex flex-col flex-no-wrap w-full justify-center items-center text-center text-3xl lg:text-4xl font-bold blog-header"
        >
          {{ post.title }}
        </h1>
        <a href="" class="font-semibold pt-5">{{ post.author }}</a>
        <p class="py-3 text-sm tracking-widest">
          {{ dayjs(post.timestamp).format("MMM DD, YYYY") }}
        </p>
        <div>
          <ClientOnly>
            <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank"
            :href="`https://www.facebook.com/sharer/sharer.php?u=https://zacrac.com${$route.path}%2F&amp;src=sdkpreparse`" class="fb-xfbml-parse-ignore">Share</a></div>
          </ClientOnly>
        </div>
      </div>
      <div v-if="post.coverImage">
        <img class="blog-img" :src="post.coverImage" alt="" />
      </div>
      <div v-html="post.body" class="blog-content text-gray-700"></div>
      <div class="elfsight-app-a6809ff2-d527-4632-a16a-fc87e2bd34be"></div>
    </div>
  </Layout>
</template>
<page-query>
query post ($id: ID) {
  post: fireBlog (id: $id) {
    title
    author
    body
    coverImage
    timestamp
  }
}
</page-query>
<script>
import dayjs from "dayjs";

export default {
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
      dayjs: dayjs,
    };
  },
  mounted() {
    require("share-buttons/dist/share-buttons");
    let hypothesisScript = document.createElement("script");
        hypothesisScript.setAttribute('src', 'https://apps.elfsight.com/p/platform.js');
        document.body.appendChild(hypothesisScript);
  },
  computed: {
    post() {
      return this.$page.post;
    },
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.body.slice(4, 100),
        },
        {
          key: "robots",
          name: "robots",
          content: "index,follow",
        },
        {
          key: "keywords",
          name: "keywords",
          content: "Data, Data Science, Market Research, Zacrac,  blog, Ngeria",
        },
        {
          property: "og:title",
          content: this.$page.post.title,
          vmid: "og:title",
        },
        {
          property: "og:descrition",
          content: this.$page.post.body.slice(0, 100),
          vmid: "og:description",
        },
        {
          property: "og:type",
          content: "website",
          vmid: "og:type",
        },
        {
          property: "og:url",
          content: `https://zacrac.com${this.$route.path}`,
          vmid: "og:url",
        },
        {
          property: "og:image",
          content: this.$page.post.coverImage,
          vmid: "og:image",
        },
        {
          property: "twitter:title",
          content: this.$page.post.title,
          vmid: "og:title",
        },
        {
          property: "twitter:descrition",
          content: this.$page.post.body.slice(0, 100),
          vmid: "twitter:description",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
          vmid: "twitter:card",
        },
        {
          property: "twitter:url",
          content: `https://zacrac.com${this.$route.path}`,
          vmid: "twitter:url",
        },
        {
          property: "twitter:image",
          content: this.$page.post.coverImage,
          vmid: "twitter:image",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.share-btn > a {
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 12px;
  font-family: Verdana, Arial;
}
.share-btn > a:hover {
  cursor: pointer;
}
.access:hover {
  text-decoration: underline;
}
.blog-header::after {
  content: "";
  @apply flex;
  width: 122px;
  height: 1px;
  background: rgb(179, 179, 179);
  margin-bottom: 7px;
}
.blog-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  @apply my-8;
}
.blog-content {
  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 5px 0;
  }
  p {
    font-size: 18px;
    line-height: 26px;
    display: inline-block;
    margin: 15px 0;
  }
  ul {
    @apply list-disc;
    @apply list-outside;
    margin-left: 40px;
    display: flex;
    flex-flow: column nowrap;
    li {
      margin: 11px 0;
      font-size: 18px;
      line-height: 26px;
      padding: 0 !important;
      margin: 0;
    }
  }
}
</style>
