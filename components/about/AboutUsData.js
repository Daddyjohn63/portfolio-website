import WhoWeAreImg1 from '@/public/images/img2.jpg';
import WhoWeAreImg2 from '@/public/images/img3.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { BsPostcard } from 'react-icons/bs';
// import { RiUserStarLine } from 'react-icons/ri';

export const aboutUsData = {
  aboutId: 101,
  aboutSubTitle: 'About Jackie Paul',
  aboutTitle: 'My Journey',
  aboutImage: [WhoWeAreImg2],
  aboutDescription:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odit earum accusamus, culpa expedita doloribus natus incidunt dignissimos hic distinctio labore nostrum porro repellendus at atque dolor maxime perspiciatis, numquam harum. Error aperiam eligendi fugiat magni nemo omnis quibusdam asperiores quidem, modi similique esse repellat enim, vitae, nostrum explicabo fugit.',
  keyPoints: [
    {
      icon: ChevronRight,
      title: 'Point 1',
      description:
        'An innovation-focused partnership fostering collaboration and progress.'
    },
    {
      icon: ChevronRight,
      title: 'Point 2',
      description: '100% Satisfaction rate across 150+ completed projects.'
    }
  ],
  ourMission: [
    {
      aboutId: 102,
      aboutTitle: 'Our Mission',
      aboutDescription:
        'Our core mission is to empower both businesses and individuals by providing innovative and tailor-made IT solutions that boost productivity, streamline operations, and fuel growth.'
    },
    {
      aboutId: 103,
      aboutTitle: 'Our Vision',
      aboutDescription:
        'We strive to nurture outstanding developers who can confidently represent our organization on the global stage, fueled by a dynamic culture and unwavering motivation.'
    }
  ]
};
