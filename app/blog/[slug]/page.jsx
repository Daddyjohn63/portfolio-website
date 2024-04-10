import Heading from '@/components/common/Heading';
import { getBlogPost } from '@/lib/blog';
import Image from 'next/image';

const BlogSinglePage = async ({ params: { slug } }) => {
  //console.log('PROPS', props);
  const project = await getBlogPost(slug);

  console.log('[Posts Page] rendering', slug);

  return (
    <div className="container mt-[3rem]">
      <div>
        <Heading>{project.title}</Heading>
      </div>
      <Image
        src={project.image}
        alt="image"
        width={1000}
        height={753}
        className="w-full rounded-lg"
      />
      <div className="w-full mt-[2rem] pb-[10rem]">
        <article
          dangerouslySetInnerHTML={{ __html: project.body }}
          className="prose min-w-full"
        />
      </div>
    </div>
  );
};
export default BlogSinglePage;
