export default {
    build: {
        babel: {
            plugins: [['@babel/plugin-proposal-private-methods', {loose: true}]],
        },
    },
    buildModules: [
        "@nuxtjs/vuetify"
    ],
    modules: [
        "@nuxtjs/axios",
        "bootstrap-vue/nuxt",
    ],
    srcDir: 'client/',
    components: true
}