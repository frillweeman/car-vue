import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue,
                secondary: colors.blue,
                accent: colors.shades.black,
                error: colors.red.accent3,
                secondaryText: colors.grey.darken2
            },
            dark: {
                primary: colors.blue,
                secondary: colors.grey.darken4,
                secondaryText: colors.grey.lighten2
            },
        },

        // automatically detect light/dark mode from OS
        dark: window.matchMedia('(prefers-color-scheme: dark)').matches
    }
});
