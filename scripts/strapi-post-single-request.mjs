// node scripts/strapi-post-single-request.mjs
//get a post with a specific slug

import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://127.0.0.1:1337/api/posts' +
  '?' +
  qs.stringify(
    {
      filters: { slug: { $eq: 'post-1' } },
      fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
      populate: { image: { fields: ['url'] } },
      pagination: { pageSize: 1, withCount: false }
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-post-single-response.json';
writeFileSync(file, formatted, 'utf8');
