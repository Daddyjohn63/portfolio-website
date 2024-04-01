import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon
  }
];

const HomeSectionOne = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-8 pt-24">
      {/* <!-- Left side: Text --> */}
      <div className="md:w-1/2 pt-12">
        <h2 className="text-2xl font-bold mb-4">Your Text Goes Here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque
          turpis, vitae posuere lectus sagittis vel. Phasellus hendrerit lorem id libero
          ultrices, in varius elit efficitur.
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque
          turpis, vitae posuere lectus sagittis vel. Phasellus hendrerit lorem id libero
          ultrices, in varius elit efficitur.
        </p>
      </div>

      {/* <!-- Right side: Image --> */}
      <div className="md:w-1/2">
        <Image
          src="/images/img1.jpg"
          alt="Image"
          width={800}
          height={600}
          className="w-full h-auto md:h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
export default HomeSectionOne;
