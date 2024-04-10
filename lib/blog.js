import { readdir, readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getBlogPost(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, 'utf8');
  const {
    content,
    data: { title, image, date, category }
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, image, category, body };
}

export async function getBlogPosts() {
  const files = await readdir('./content/blog');
  const slugs = files
    .filter(file => file.endsWith('.md'))
    .map(file => file.slice(0, -'.md'.length));
  const posts = [];
  //console.log('slugs:', slugs);
  for (const slug of slugs) {
    const post = await getBlogPost(slug);
    posts.push(post);
  }
  return posts;
}
