import { readdir, readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import qs from 'qs';

//not used yet. can also use for getting first three posts.
export async function getFeaturedPost() {
  const posts = await getBlogPosts();
  return posts[0];
}

const CMS_URL = 'http://localhost:1337';

//get single blog post
export async function getBlogPost(slug) {
  // const text = await readFile(`./content/blog/${slug}.md`, 'utf8');
  // const {
  //   content,
  //   data: { title, image, date, category, subheading, excerpt }
  // } = matter(text);
  // const body = marked(content);
  // return { slug, title, date, image, category, subheading, excerpt, body };
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        filters: { slug: { $eq: slug } },
        fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
        populate: { image: { fields: ['url'] } },
        pagination: { pageSize: 1, withCount: false }
      },
      { encodeValuesOnly: true }
    );
  console.log('getBlogPost', url);

  const response = await fetch(url);
  const { data } = await response.json();
  const { attributes } = data[0];
  return {
    slug: attributes.slug,
    title: attributes.title,
    body: marked(attributes.body),
    date: attributes.publishedAt,
    image: CMS_URL + attributes.image.data.attributes.url
  };
}

//get all blog posts and their categories
//now calls strapi
export async function getBlogPosts() {
  const url =
    `${CMS_URL}/api/posts?` +
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
  const { data } = await response.json();
  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
    excerpt: attributes.excerpt,
    date: attributes.publishedAt,
    image: CMS_URL + attributes.image.data.attributes.url,
    categories: attributes.categories.data.map(cat => ({
      id: cat.id,
      title: cat.attributes.title,
      slug: cat.attributes.slug
    }))
  }));
}

export async function getSlugs() {
  const files = await readdir('./content/blog');
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.slice(0, -'.md'.length));
}
