
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        work: resolve(__dirname, 'Work.html'),
        detailWork: resolve(__dirname, 'Detail Work.html'),
        blog: resolve(__dirname, 'Blog.html'),


      }
    }
  }
})