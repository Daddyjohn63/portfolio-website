import { readdir, readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

//not used yet. can also use for getting first three posts.
export async function getFeaturedPost() {
  const posts = await getBlogPosts();
  return posts[0];
}

export async function getBlogPost(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, 'utf8');
  const {
    content,
    data: { title, image, date, category, subheading, excerpt }
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, image, category, subheading, excerpt, body };
}

export async function getBlogPosts() {
  const files = await readdir('./content/blog');
  const slugs = await getSlugs();
  const posts = [];
  //console.log('slugs:', slugs);
  for (const slug of slugs) {
    const post = await getBlogPost(slug);
    posts.push(post);
  }
  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts;
}

export async function getSlugs() {
  const files = await readdir('./content/blog');
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.slice(0, -'.md'.length));
}
