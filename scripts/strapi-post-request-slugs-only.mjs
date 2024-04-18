// node scripts/strapi-post-request-slugs-only.mjs

import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://127.0.0.1:1337/api/posts' +
  '?' +
  qs.stringify(
    {
      fields: ['slug'],
      sort: ['publishedAt:desc'],
      pagination: { pageSize: 100 }
    },
    { encodeValuesOnly: true }
  );
//console.log('url:', url);
const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-posts-response-slugs-only.json';
writeFileSync(file, formatted, 'utf8');
