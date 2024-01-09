import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
        vue(),
        autoImport({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue', 'pinia', 'vue-router'],
            eslintrc: {
                enabled: false, // 改为 true 用于生成 eslint 配置，生成后改回 false，避免重复生成消耗性能
            },
            // 按需导入 element-plus
            // resolvers: [ElementPlusResolver()],
        }),
        components({
            // 按需导入 element-plus
            // resolvers: [ElementPlusResolver()],
            // 指定组件所在文件夹的位置，默认是src/components
            dirs: ['src/components'],
        }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
    },
      // 环境变量目录
      envDir: './env',
      // 环境变量前缀
      envPrefix: 'APP_',
})
