const path = require('path')
const { db } = require('gridsome-source-firestore')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/*.scss'),
      ],
    })
}
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Zacrac',
  titleTemplate: `%s`,
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  plugins: [{
      use: "gridsome-plugin-tailwindcss",
    },
    // {
    //   use: 'gridsome-source-firestore',
    //   options: {
    //     // Update this with your service credentials file
    //     credentials: require('./serviceAccount.json'),
    //     debug: true,
    //     collections: [{
    //         ref: (db => db.collection('blog').orderBy('timestamp', 'desc')),
    //         slug: (doc, slugify) => {
    //           return `/blog/${slugify(doc.data.title)}`
    //         }
    //       }
    //     ]
    //   }
    // }
  ],
}