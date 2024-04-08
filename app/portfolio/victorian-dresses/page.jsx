import Heading from '@/components/common/Heading';
import { getProject } from '@/lib/projects';
import Image from 'next/image';

const VictorianDresses = async () => {
  const project = await getProject('victorian-dresses');

  return (
    <div className="container mt-[3rem]">
      <div>
        <Heading>{project.title}</Heading>
      </div>
      <Image
        src={project.image}
        alt="image"
        width={800}
        height={600}
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
export default VictorianDresses;