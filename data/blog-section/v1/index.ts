import { BlogSectionProps } from '@/src/sections/blog/v1';

export const blogSectionData: BlogSectionProps = {
  sectionHeading: {
    subtitle: 'our blogs',
    title: 'Transforming Challenges into Seamless Solutions',
  },
  blogs: [
    {
      image: {
        src: '/assets/images/blog/blog-1.webp',
        alt: 'We implement state-of-the-art encryption',
      },
      date: {
        day: '30',
        month: 'may',
      },
      author: {
        name: 'Admin',
        slug: '',
      },
      slug: '/blog/single',
      title: 'We implement state-of-the-art encryption',
      commentCount: 5,
    },
    {
      image: {
        src: '/assets/images/blog/blog-2.webp',
        alt: 'We cater to various industries',
      },
      date: {
        day: '30',
        month: 'may',
      },
      author: {
        name: 'Admin',
        slug: '',
      },
      slug: '/blog/single',
      title: 'We cater to various industries',
      commentCount: 5,
    },
    {
      image: {
        src: '/assets/images/blog/blog-3.webp',
        alt: 'IT solutions enhance efficiency',
      },
      date: {
        day: '30',
        month: 'may',
      },
      author: {
        name: 'Admin',
        slug: '',
      },
      slug: '/blog/single',
      title: 'IT solutions enhance efficiency',
      commentCount: 5,
    },
  ],
};
