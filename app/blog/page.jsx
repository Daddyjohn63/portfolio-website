import { getBlogPosts } from '@/lib/blog';

const BlogPage = async () => {
  const blogPosts = await getBlogPosts();

  console.log('blog page:', blogPosts);

  return <div>BlogPage</div>;
};
export default BlogPage;
