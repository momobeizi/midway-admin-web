import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> pnpm i @types/node -D
import UnoCSS from 'unocss/vite';

function resolve(dir: string) {
  return path.join(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  // 配置别名
  resolve: {
    alias: {
      '@': resolve('src'), // 设置 `@` 指向 `src` 目录
    },
  },
  server: {
    port: 3001, // 设置服务启动端口号
  }
});
