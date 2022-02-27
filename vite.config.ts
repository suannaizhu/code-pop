import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'; // error 找不到模块“path”或其相应的类型声明。ts(2307)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 找不到名称“__dirname”。ts(2304)
    },
  },
  plugins: [vue()],
});
