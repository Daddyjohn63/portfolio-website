import { writeFileSync } from 'node:fs';

const url = 'http://127.0.0.1:1337/api/posts' + '?populate=*';
const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-posts-response-all.json';
writeFileSync(file, formatted, 'utf8');
