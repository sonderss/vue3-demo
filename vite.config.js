import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from "vite-plugin-compression"
// import externalGlobals from "rollup-plugin-external-globals";
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://cdn.bootcdn.net/ajax/libs/vue/3.2.0-beta.7/vue.global.min.js'
        },
        {
          name: 'vuex',
          var: 'Vuex',
          path: 'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.prod.js'
        },
        {
          name: 'ant-design-vue',
          var: 'antd',
          path: 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.js',
          css: 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.min.css'
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://cdn.jsdelivr.net/npm/vue-router@4.0.10/dist/vue-router.global.prod.js'
        },
      ]
    }),
    viteCompression()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 打包配置
  build: {
    // rollupOptions: {
    //   external: ["vue", "ant-design-vue"],
    //   plugins: [
    //     externalGlobals({
    //       vue: "Vue",
    //       "ant-design-vue": "antd",
    //     }),
    //   ],
    // },
    target: 'modules',
    cssCodeSplit: true, // 如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
    sourcemap: false, // 构建后是否生成 source map 文件。
    // outDir: 'dist', //指定输出路径
    // assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
  // server: {
  //   open: true, // 在服务器启动时自动在浏览器中打开应用程序
  //   //host: 'localhost',  // 指定服务器主机名
  //   port: 8888, // 指定服务器端口
  //   proxy: { // 为开发服务器配置自定义代理规则

  //   }
  // }
})