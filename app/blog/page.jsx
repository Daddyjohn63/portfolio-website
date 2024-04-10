import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/common/Heading';
import { formatDateString } from '@/lib/date';

export const metadata = {
  title: 'Blog Page',
  description: 'The best blog ever'
};

const BlogPage = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <div className="container py-12">
        <Heading>Blog</Heading>
        <ul className="flex flex-row flex-wrap gap-3">
          {blogPosts.map(post => (
            <li
              key={post.slug}
              className="bg-white border rounded shadow w-80 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post?.image}
                  width="400"
                  height="300"
                  alt=""
                  className="rounded-t"
                />
                <div className="p-3">
                  <div className="flex flex-col">
                    <span>{formatDateString(post?.date)}</span>
                    <span>{post?.category}</span>
                  </div>

                  <h2 className="font-semibold py-1">{post?.title}</h2>
                  <p>{post?.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default BlogPage;
