import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
theme: {
    dark: true,
    themes: {
    light: {
      background: colors.grey.lighten5
    }
  }
  }
});
