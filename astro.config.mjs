// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://woonge.github.io', // 실제 배포시 이 값을 사용하지 않고 github 설정에서 주소값을 가져와서 사용
    integrations: [mdx(), sitemap()],
    i18n: {
        defaultLocale: 'ko',
        locales: ['ko', 'en'],
    },
});
