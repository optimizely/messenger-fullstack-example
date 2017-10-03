// Hard coded product data in the format expected by Facebook
module.exports.products = {
  scarf: {
    multiple_products: {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "list",
                "top_element_style": "compact",
                "elements": [
                {
                  "title": "Scarf",
                    "subtitle": "$100",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/scarf_grande.png?v=1470769109",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Scarf",
                            "url": "https://www.atticandbutton.com/products/scarf",
                            "subtitle": "$100",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/scarf_grande.png?v=1470769109"
                        })
                    }]
                },
                {
                  "title": "Acrylic Cashmere Scarf",
                    "subtitle": "$125",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/4195500_medium_3126d8ed-8d2c-4989-9e91-e2b18dafe6d7_grande.png?v=1470770727",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/acrylic-cashmere-scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/acrylic-cashmere-scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Acrylic Cashmere Scarf",
                            "url": "https://www.atticandbutton.com/products/acrylic-cashmere-scarf",
                            "subtitle": "$125",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/4195500_medium_3126d8ed-8d2c-4989-9e91-e2b18dafe6d7_grande.png?v=1470770727"
                        })
                    }]
                },
                {
                  "title": "Camel Marl Woven Scarf",
                    "subtitle": "$50",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg?v=1470872017",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Camel Marl Woven Scarf",
                            "url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf",
                            "subtitle": "$50",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg?v=1470872017"
                        })
                    }]
                }],
                "buttons": [
                    {
                        "type": "web_url",
                        "title": "View More",
                        "url": "https://www.atticandbutton.com/collections/all/Scarf"
                    }
                ]
            }
        }
    },
    single_product: {
      "attachment": {
        "type": "template",
        "payload":{
          "template_type":"generic",
          "elements":[
          {
            "title": "Scarf",
            "subtitle": "$100",
            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/scarf_grande.png?v=1470769109",
            "default_action": {
              "type":"web_url",
              "url": "https://www.atticandbutton.com/products/scarf",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.atticandbutton.com/products/scarf"
            },
            "buttons":[
            {
              "type":"web_url",
              "url":"https://www.atticandbutton.com/products/scarf",
              "title":"View Scarf"
            },
            {
              "type": "postback",
              "title": "Buy",
              "payload": JSON.stringify({
                "title":"Camel Marl Woven Scarf",
                "url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf",
                "subtitle": "$50",
                "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg?v=1470872017"
              })
            }              
          ]
        }]
      }
    }
  }
  },
  hats: {
    multiple_products: {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "list",
                "top_element_style": "compact",
                "elements": [
                {
                  "title": "5 Panel Camp Cap",
                    "subtitle": "$48",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/5-panel-hat_medium_630ad61c-e050-4046-bdbb-efa5151351af_grande.jpeg?v=1437449607",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/5-panel-hat",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/5-panel-hat"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "url": "https://www.atticandbutton.com/products/5-panel-hat",
                            "title":"5 Panel Camp Cap",
                            "subtitle": "$48",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/5-panel-hat_medium_630ad61c-e050-4046-bdbb-efa5151351af_grande.jpeg?v=1437449607"
                        })
                    }]
                },
                {
                  "title": "Hipster Beanie",
                    "subtitle": "$35",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/people-690547_1920_bcb52dc1-dabf-4a03-ad4c-0c4b70f30758_grande.jpg?v=1495086375",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/hipster-beanie-1",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/acrylic-cashmere-scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Hipster Beanie",
                            "url": "https://www.atticandbutton.com/products/hipster-beanie-1",
                            "subtitle": "$35",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/people-690547_1920_bcb52dc1-dabf-4a03-ad4c-0c4b70f30758_grande.jpg?v=1495086375"
                        })
                    }]
                },
                {
                  "title": "Fancy Hat",
                    "subtitle": "$100",
                    "image_url": "https://cdn.optimizely.com/img/8177152216/e08ccf450e88408f94002ded2e877f2b.jpg",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Fancy Hat",
                            "url": "https://www.atticandbutton.com/products/scarf",
                            "subtitle": "$100",
                            "image_url": "https://cdn.optimizely.com/img/8177152216/e08ccf450e88408f94002ded2e877f2b.jpg"
                        })
                    }]
                }],
                "buttons": [
                    {
                        "type": "web_url",
                        "title": "View More",
                        "url": "https://www.atticandbutton.com/collections/all/Scarf"
                    }
                ]
            }
        }
    },
    single_product: {
      "attachment": {
        "type": "template",
        "payload":{
          "template_type":"generic",
          "elements":[
          {
            "title": "5 Panel Camp Cap",
            "subtitle": "$48",
            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/5-panel-hat_medium_630ad61c-e050-4046-bdbb-efa5151351af_grande.jpeg?v=1437449607",
            "default_action": {
              "type":"web_url",
              "url": "https://www.atticandbutton.com/products/5-panel-hat",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.atticandbutton.com/products/5-panel-hat"
            },
            "buttons":[
            {
              "type":"web_url",
              "url":"https://www.atticandbutton.com/products/5-panel-hat",
              "title":"View Hat"
            },
            {
              "type": "postback",
              "title": "Buy",
              "payload": JSON.stringify({
                "title":"5 Panel Camp Cap",
                "url": "https://www.atticandbutton.com/products/5-panel-hat",
                "subtitle": "$48",
                "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/5-panel-hat_medium_630ad61c-e050-4046-bdbb-efa5151351af_grande.jpeg?v=1437449607"
              })
            }              
          ]
        }]
      }
    }
  }
  },
  coat: {
    multiple_products: {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "list",
                "top_element_style": "compact",
                "elements": [
                {
                  "title": "Showerproof Rubberised Parka",
                    "subtitle": "$145",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/feb7f237a3e84fb1aa19a2287291a29c_grande.jpg?v=1484783935",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/khaki-showerproof-rubberised-parka",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/khaki-showerproof-rubberised-parka"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "url": "https://www.atticandbutton.com/products/khaki-showerproof-rubberised-parka",
                            "title":"Showerproof Rubberised Parka",
                            "subtitle": "$145",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/feb7f237a3e84fb1aa19a2287291a29c_grande.jpg?v=1484783935"
                        })
                    }]
                },
                {
                  "title": "Trench Coat",
                    "subtitle": "$240",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/trench_grande.png?v=1470853727",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/womens-trench-coat",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/womens-trench-coat"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Trench Coat",
                            "url": "https://www.atticandbutton.com/products/womens-trench-coat",
                            "subtitle": "$240",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/trench_grande.png?v=1470853727"
                        })
                    }]
                },
                {
                  "title": "The Beach Jacket",
                    "subtitle": "$150",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/oFkGjAT4Mz_the_beach_jacket_0_original_grande.jpg?v=1470872345",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/the-beach-jacket",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/the-beach-jacket"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Camel Marl Woven Scarf",
                            "url": "https://www.atticandbutton.com/products/the-beach-jacket",
                            "subtitle": "$50",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/oFkGjAT4Mz_the_beach_jacket_0_original_grande.jpg?v=1470872345"
                        })
                    }]
                }],
                "buttons": [
                    {
                        "type": "web_url",
                        "title": "View More",
                        "url": "https://www.atticandbutton.com/collections/all/Scarf"
                    }
                ]
            }
        }
    },
    single_product: {
      "attachment": {
        "type": "template",
        "payload":{
          "template_type":"generic",
          "elements":[
          {
            "title": "The Beach Jacket",
            "subtitle": "$150",
            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/oFkGjAT4Mz_the_beach_jacket_0_original_grande.jpg?v=1470872345",
            "default_action": {
              "type":"web_url",
              "url": "https://www.atticandbutton.com/products/the-beach-jacket",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.atticandbutton.com/products/the-beach-jacket"
            },
            "buttons":[
            {
              "type":"web_url",
              "url":"https://www.atticandbutton.com/products/the-beach-jacket",
              "title":"View Jacket"
            },
            {
              "type": "postback",
              "title": "Buy",
              "payload": JSON.stringify({
                "title":"The Beach Jacket",
                "url": "https://www.atticandbutton.com/products/the-beach-jacket",
                "subtitle": "$150",
                "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/oFkGjAT4Mz_the_beach_jacket_0_original_grande.jpg?v=1470872345"
              })
            }              
          ]
        }]
      }
    }
  }
  },
  watch: {
    multiple_products: {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "list",
                "top_element_style": "compact",
                "elements": [
                {
                  "title": "Scarf",
                    "subtitle": "$100",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/scarf_grande.png?v=1470769109",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Scarf",
                            "url": "https://www.atticandbutton.com/products/scarf",
                            "subtitle": "$100",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/scarf_grande.png?v=1470769109"
                        })
                    }]
                },
                {
                  "title": "Acrylic Cashmere Scarf",
                    "subtitle": "$125",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/4195500_medium_3126d8ed-8d2c-4989-9e91-e2b18dafe6d7_grande.png?v=1470770727",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/acrylic-cashmere-scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/acrylic-cashmere-scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Acrylic Cashmere Scarf",
                            "url": "https://www.atticandbutton.com/products/scarf",
                            "subtitle": "$125",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/4195500_medium_3126d8ed-8d2c-4989-9e91-e2b18dafe6d7_grande.png?v=1470770727"
                        })
                    }]
                },
                {
                  "title": "Camel Marl Woven Scarf",
                    "subtitle": "$50",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg?v=1470872017",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Camel Marl Woven Scarf",
                           "url": "https://www.atticandbutton.com/products/scarf", 
                            "subtitle": "$50",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg?v=1470872017"
                        })
                    }]
                }],
                "buttons": [
                    {
                        "type": "web_url",
                        "title": "View More",
                        "url": "https://www.atticandbutton.com/collections/all/Scarf"
                    }
                ]
            }
        }
    },
    single_product: {
      "attachment": {
        "type": "template",
        "payload":{
          "template_type":"generic",
          "elements":[
          {
            "title": "Scarf",
            "subtitle": "$100",
            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/scarf_grande.png?v=1470769109",
            "default_action": {
              "type":"web_url",
              "url": "https://www.atticandbutton.com/products/scarf",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.atticandbutton.com/products/scarf"
            },
            "buttons":[
            {
              "type":"web_url",
              "url":"https://www.atticandbutton.com/products/scarf",
              "title":"View Scarf"
            },
            {
              "type": "postback",
              "title": "Buy",
              "payload": JSON.stringify({
                "title":"Camel Marl Woven Scarf",
                "url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf",
                "subtitle": "$50",
                "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg?v=1470872017"
              })
            }              
          ]
        }]
      }
    }
  }
  },
  shirts: {
    multiple_products: {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "list",
                "top_element_style": "compact",
                "elements": [
                {
                  "title": "SS Aloha",
                    "subtitle": "$118",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/ZHURdWAGef_the_ss_aloha_popover_0_original_grande.jpg?v=1470873026",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/ss-aloha-pullover",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/ss-aloha-pullover"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "url": "https://www.atticandbutton.com/products/ss-aloha-pullover",
                            "title":"SS Aloha",
                            "subtitle": "$118",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/ZHURdWAGef_the_ss_aloha_popover_0_original_grande.jpg?v=1470873026"
                        })
                    }]
                },
                {
                  "title": "Chevron",
                    "subtitle": "$36",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/chevron_cream_medium_506bcd3a-3a6a-473e-b3b1-18532cfd7dc7_grande.jpeg?v=1437449612",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/harriet-chambray",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/harriet-chambray"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "url": "https://www.atticandbutton.com/products/harriet-chambray",
                            "title":"Chevron",
                            "subtitle": "$36",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/chevron_cream_medium_506bcd3a-3a6a-473e-b3b1-18532cfd7dc7_grande.jpeg?v=1437449612"
                        })
                    }]
                },
                {
                  "title": "Long Sleeve Swing Shirt",
                    "subtitle": "$46",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/swing_deepwater_medium_ac7c638b-cb61-4f6c-a625-228608c3a462_grande.jpeg?v=1437449606",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/long-sleeve-swing",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/long-sleeve-swing"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "title":"Long Sleeve Swing Shirt",
                            "url": "https://www.atticandbutton.com/products/long-sleeve-swing",
                            "subtitle": "$46",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/swing_deepwater_medium_ac7c638b-cb61-4f6c-a625-228608c3a462_grande.jpeg?v=1437449606"
                        })
                    }]
                }],
                "buttons": [
                    {
                        "type": "web_url",
                        "title": "View More",
                        "url": "https://www.atticandbutton.com/collections/all/Scarf"
                    }
                ]
            }
        }
    },
    single_product: {
      "attachment": {
        "type": "template",
        "payload":{
          "template_type":"generic",
          "elements":[
          {
            "title": "SS Aloha",
            "subtitle": "$118",
            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/ZHURdWAGef_the_ss_aloha_popover_0_original_grande.jpg?v=1470873026",
            "default_action": {
              "type":"web_url",
              "url": "https://www.atticandbutton.com/products/ss-aloha-pullover",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.atticandbutton.com/products/ss-aloha-pullover"
            },
            "buttons":[
            {
              "type":"web_url",
              "url":"https://www.atticandbutton.com/products/ss-aloha-pullover",
              "title":"View Shirt"
            },
            {
              "type": "postback",
              "title": "Buy",
              "payload": JSON.stringify({
                "title":"SS Aloha",
                "url": "https://www.atticandbutton.com/products/ss-aloha-pullover",
                "subtitle": "$118",
                "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/ZHURdWAGef_the_ss_aloha_popover_0_original_grande.jpg?v=1470873026"
              })
            }              
          ]
        }]
      }
    }
  }
  },
  bags: {
    multiple_products: {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "list",
                "top_element_style": "compact",
                "elements": [
                {
                  "title": "Scarf",
                    "subtitle": "$100",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/scarf_grande.png?v=1470769109",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "url": "https://www.atticandbutton.com/products/scarf",
                            "title":"Scarf",
                            "subtitle": "$100",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/scarf_grande.png?v=1470769109"
                        })
                    }]
                },
                {
                  "title": "Acrylic Cashmere Scarf",
                    "subtitle": "$125",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/4195500_medium_3126d8ed-8d2c-4989-9e91-e2b18dafe6d7_grande.png?v=1470770727",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/acrylic-cashmere-scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/acrylic-cashmere-scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "url": "https://www.atticandbutton.com/products/scarf",
                            "title":"Acrylic Cashmere Scarf",
                            "subtitle": "$125",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/4195500_medium_3126d8ed-8d2c-4989-9e91-e2b18dafe6d7_grande.png?v=1470770727"
                        })
                    }]
                },
                {
                  "title": "Camel Marl Woven Scarf",
                    "subtitle": "$50",
                    "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg?v=1470872017",
                    "default_action": {
                        "type":"web_url",
                        "url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf"
                    },
                    "buttons": [{
                        "type": "postback",
                        "title": "Buy",
                        "payload": JSON.stringify({
                            "url": "https://www.atticandbutton.com/products/scarf",
                            "title":"Camel Marl Woven Scarf",
                            "subtitle": "$50",
                            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg?v=1470872017"
                        })
                    }]
                }],
                "buttons": [
                    {
                        "type": "web_url",
                        "title": "View More",
                        "url": "https://www.atticandbutton.com/collections/all/Scarf"
                    }
                ]
            }
        }
    },
    single_product: {
      "attachment": {
        "type": "template",
        "payload":{
          "template_type":"generic",
          "elements":[
          {
            "title": "Scarf",
            "subtitle": "$100",
            "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/scarf_grande.png?v=1470769109",
            "default_action": {
              "type":"web_url",
              "url": "https://www.atticandbutton.com/products/scarf",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.atticandbutton.com/products/scarf"
            },
            "buttons":[
            {
              "type":"web_url",
              "url":"https://www.atticandbutton.com/products/scarf",
              "title":"View Scarf"
            },
            {
              "type": "postback",
              "title": "Buy",
              "payload": JSON.stringify({
                "title":"Camel Marl Woven Scarf",
                "url": "https://www.atticandbutton.com/products/camel-marl-woven-scarf",
                "subtitle": "$50",
                "image_url": "https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg?v=1470872017"
              })
            }              
          ]
        }]
      }
    }
  }
  }
}
