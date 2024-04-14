import Heading from '@/components/common/Heading';
import { getProject } from '@/lib/projects';
import Image from 'next/image';

const PortfolioSinglePage = async ({ params: { slug } }) => {
  //console.log('PROPS', props);
  const project = await getProject(slug);

  return (
    <div className="container mt-[3rem]">
      <div className="grid lg:grid-cols-[2fr_3fr] gap-[5rem]">
        <div>
          <div>
            <Heading>{project.title}</Heading>
          </div>
          <div>
            <div className="mt-2 bg-gray-100 p-2 rounded-lg shadow-[0_8px_8px_-1px_rgba(0,0,0,0.2)]">
              <h2>{project.subheading}</h2>
              <p>{project.challenge}</p>
            </div>
          </div>
        </div>
        <Image
          src={project.image}
          alt="image"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
      </div>

      <div className="w-full mt-[3rem] pb-[10rem]">
        <article
          dangerouslySetInnerHTML={{ __html: project.body }}
          className="prose min-w-full"
        />
      </div>
    </div>
  );
};
export default PortfolioSinglePage;
