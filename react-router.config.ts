import type { Config } from '@react-router/dev/config';
import { pageData } from './app/pageData';

export default {
  ssr: false,
  prerender() {
    return ['/', ...pageData.map(({ number }) => `/${number}`)];
  },
} satisfies Config;
