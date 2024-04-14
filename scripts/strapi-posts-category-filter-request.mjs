// node scripts/strapi-posts-category-filter-request.mjs
//get all posts with a specific category

import { writeFileSync } from 'node:fs';
import qs from 'qs';

const categoryName = 'books'; // Replace with your specific category name

const query = qs.stringify(
  {
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: {
      categories: {
        fields: ['title', 'slug'],
        sort: ['name:asc'],
        filters: {
          title: {
            $eq: categoryName
          }
        }
      },
      image: {
        fields: ['url']
      }
    },
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 6 }
  },
  { encodeValuesOnly: true } // This helps in ensuring your query strings are correctly encoded
);

const url = 'http://127.0.0.1:1337/api/posts?' + query;

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-posts-category-filter-res.json';
writeFileSync(file, formatted, 'utf8');
