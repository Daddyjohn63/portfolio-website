//Posts single
import Heading from '@/components/common/Heading';
import { getBlogPost, getSlugs } from '@/lib/blog';
import { formatDateString } from '@/lib/date';
import Image from 'next/image';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map(slug => ({ slug })); //convert string to object
}

export async function generateMetadata({ params: { slug } }) {
  const post = await getBlogPost(slug);
  return {
    title: post?.title
  };
}

const BlogSinglePage = async ({ params: { slug } }) => {
  //console.log('PROPS', props);
  const post = await getBlogPost(slug);

  const formattedDate = formatDateString(post?.date);

  console.log('[Posts Page] rendering', slug);

  return (
    <div className="container mt-[3rem]">
      <div>
        <Heading>{post?.title}</Heading>
        <span>{formattedDate}</span>
      </div>
      <Image
        src={post?.image}
        alt="image"
        width={1000}
        height={753}
        className="w-full rounded-lg"
      />
      <div className="w-full mt-[2rem] pb-[10rem]">
        <article
          dangerouslySetInnerHTML={{ __html: post?.body }}
          className="prose min-w-full"
        />
      </div>
    </div>
  );
};
export default BlogSinglePage;
