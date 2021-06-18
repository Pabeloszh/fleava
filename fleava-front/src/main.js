// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.style.push({
    type: 'text/css',
    cssText: '*{ margin:0; box-sizing: border-box;}'
  })
  // head.bodyAttrs = { style: "margin:0" }
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.rawgit.com/mfd/e7842774e037edf15919037594a79b2b/raw/665bdfc532094318449f1010323c84013d5af953/graphik.css'
  })
  head.meta.push(
    {
      name:"og:locale",
      content:"en_US"
    },
    {
      name:"og:type",
      content:"website"
    },
    {
      name:"og:title",
      content:"Fleava | Digital Agency"
    },
    {
      name:"og:description",
      content:"We are a Digital Agency based in Singapore, Bali and Jakarta, offering Website Design & Development, Mobile App Development, Corporate Branding"
    },
    {
      name:"og:url",
      content:"https://fleava.com"
    },
    {
      name:"og:image",
      content:"http://localhost:1337/uploads/fleava_b3d1e8b938.jpg"
    },
    {
      name:"description",
      content:"We are a Digital Agency based in Singapore, Bali and Jakarta, offering Website Design & Development, Mobile App Development, Corporate Branding"
    }
  )
  Vue.component('Layout', DefaultLayout)
  
}
