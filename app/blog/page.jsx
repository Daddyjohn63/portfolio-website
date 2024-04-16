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
  // console.log('[Blog Posts]', blogPosts);

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

                    <span className="text-gray-600  mt-1 block">
                      {post.categories.map((cat, index) => [
                        <Link
                          key={cat.slug}
                          href={`/category/${cat.slug}`}
                          className="hover:underline capitalize"
                        >
                          {cat.title}
                        </Link>,
                        index < post.categories.length - 1 && ', '
                      ])}
                    </span>
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
