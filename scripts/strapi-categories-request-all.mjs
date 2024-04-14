// node scripts/strapi-categories-request-all.mjs
//get all categories

import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://127.0.0.1:1337/api/categories' +
  '?' +
  qs.stringify(
    {
      fields: ['title', 'slug']
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-categories-all-response.json';
writeFileSync(file, formatted, 'utf8');
