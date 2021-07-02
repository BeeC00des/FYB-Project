// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;700&display=swap'
  }),
  head.link.push({
    rel: 'stylesheet',
    href: 'https://unicons.iconscout.com/release/v2.0.1/css/unicons.css'
  }),
  head.meta.push({
    name: 'keywords',
    content: 'Heart disease, prediction, cardiovascular, Heart issue'
  }),
  head.script.push({
    src: 'https://static.mobilemonkey.com/js/1309354802459946.js',
    body: true
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
