import {
  defaultExclude,
  defaultInclude,
  defineConfig,
  mergeConfig,
} from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './test/setup',
      environment: 'happy-dom',
      exclude: [
        ...defaultExclude,
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        './src/config/**',
      ],
      include: defaultInclude,
    },
  }),
);
