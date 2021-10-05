import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    theme: {
      themes: {
        light: {
            primary: '#7B1832',
            secondary: '#0c343d',
            accent: '#e88b01'
        },
      },
    },
  }

export default new Vuetify(opts)
