import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import yaml from 'js-yaml';
import fs from 'fs';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

// ✅ Load YAML config
const configFilePath = path.resolve('./src/config.yaml');
const config = yaml.load(fs.readFileSync(configFilePath, 'utf8')) as Record<string, unknown>;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore', // ✅ Fix: Allows both /en and /en/ without redirect issues
  site: 'http://localhost:4321', // ✅ Define site URL (change if needed)
  
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
        ],
      },
    }),

    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
    
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    
    astrowind({
      config: './src/config.yaml',
    }), // ✅ Ensure correct config path
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
