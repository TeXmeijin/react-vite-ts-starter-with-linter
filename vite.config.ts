import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import viteReactJsx from 'vite-react-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), viteReactJsx(), tsconfigPaths()],
});
