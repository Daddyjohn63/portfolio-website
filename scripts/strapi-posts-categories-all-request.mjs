// node scripts/strapi-posts-categories-all-request.mjs
//get all posts with any categories they have

import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://127.0.0.1:1337/api/posts' +
  '?' +
  qs.stringify(
    {
      fields: ['slug', 'title', 'subtitle', 'excerpt', 'publishedAt'],
      populate: {
        categories: {
          fields: ['title', 'slug'],
          sort: ['name:asc']
        },
        image: {
          fields: ['url']
        }
      },
      sort: ['publishedAt:desc'],
      pagination: { pageSize: 6 }
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-posts-categories-all-res.json';
writeFileSync(file, formatted, 'utf8');
