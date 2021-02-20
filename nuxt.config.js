import path from "path";
import fs from "fs";

const serverConf = process.env.NODE_ENV !== "production" ? {
  https: {
    key:  fs.readFileSync(path.resolve(__dirname, "./api/config/dev-ssl-certs/server.key")),
    cert: fs.readFileSync(path.resolve(__dirname, "./api/config/dev-ssl-certs/server.cert"))
  }
} : {}

export default {
  axios: {
    baseURL: "/",
    proxyHeaders: true,
    credentials: true
  },
  build: {
    optimizeCSS: true
  },
  head: {
    title: "multipass",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "multipass" },
      { hid: "identifier-url", name: "identifier-url", content: "https://multipass.io" },
      { hid: "title", name: "title", content: "multipass" },
      { hid: "abstract", name: "abstract", content: "multipass" },
      { hid: "description", name: "description", content: "multipass" },
      { hid: "keywords", name: "keywords", content: "multipass, vohzd, " },
      { hid: "author", name: "author", content: "vohzd" },
      { hid: "language", name: "language", content: "EN" },
      { hid: "robots", name: "robots", content: "All" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: { color: '#b56d82' },
  modules: [
    "@nuxtjs/axios",
    //"@nuxtjs/pwa",
    "@nuxtjs/sitemap"
  ],
  plugins: [
    "~/plugins/fontawesome.js"
  ],
  sitemap: {
    hostname: "https://multipass.epitrade.io",
    gzip: true
  },
  server: serverConf,
  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" }
  ]
}
