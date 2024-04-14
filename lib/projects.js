import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getProject(slug) {
  const text = await readFile(`./content/projects/${slug}.md`, 'utf8');
  const {
    content,
    data: { title, image, subheading, challenge }
  } = matter(text);
  const body = marked(content);
  return { title, image, subheading, challenge, body };
}
