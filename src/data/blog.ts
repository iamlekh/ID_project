export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'interior-design-trends-2024',
    title: 'Interior Design Trends That Will Define 2024',
    excerpt:
      'Discover the latest interior design trends that are shaping homes and workspaces in 2024.',
    content: `The world of interior design is constantly evolving, bringing fresh perspectives to how we live and work. In 2024, we're seeing a beautiful blend of functionality and aesthetics, with a strong focus on sustainability and wellness.

Natural materials continue to dominate, with an emphasis on raw textures and organic forms. Biophilic design is no longer just a trend but a fundamental approach to creating healthy indoor environments.

We're also witnessing a revival of bold colors, particularly in unexpected combinations that create dynamic and energetic spaces. However, these are being balanced with calming neutrals to maintain harmony.

Technology integration has become more seamless than ever, with smart home features being designed to complement rather than dominate the aesthetic of a space.`,
    author: {
      name: 'Sarah Anderson',
      role: 'Senior Interior Designer',
      avatar:
        'src/data/images/landscape-placeholder.svg',
    },
    category: 'Trends',
    image:
      'src/data/images/landscape-placeholder.svg',
    date: 'March 1, 2024',
    readTime: '5 min read',
  },
  {
    id: 'sustainable-design-practices',
    title: 'Sustainable Design Practices for Modern Homes',
    excerpt:
      'Learn how to incorporate eco-friendly design elements into your home while maintaining style and comfort.',
    content: `Sustainable design is more than just a buzzword – it's a responsibility we have towards our planet. This article explores practical ways to create environmentally conscious spaces without compromising on style or comfort.

From choosing renewable materials to implementing energy-efficient solutions, every decision in the design process can contribute to a more sustainable future. We'll explore how to select eco-friendly materials, reduce energy consumption, and create spaces that promote well-being.

Key areas we'll cover include:
- Sustainable material selection
- Energy-efficient lighting solutions
- Water conservation techniques
- Waste reduction strategies
- Indoor air quality improvement`,
    author: {
      name: 'Michael Chen',
      role: 'Commercial Design Specialist',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
    category: 'Sustainability',
    image:
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80',
    date: 'February 28, 2024',
    readTime: '4 min read',
  },
  {
    id: 'small-space-solutions',
    title: 'Maximizing Small Spaces: Design Tips and Tricks',
    excerpt:
      'Creative solutions for making the most of limited space without sacrificing style or functionality.',
    content: `Living in a small space doesn't mean you have to compromise on style or functionality. With clever design solutions and strategic planning, you can transform any compact area into a comfortable and efficient living space.

We'll explore innovative storage solutions, multi-functional furniture options, and visual tricks that can make your space feel larger than it actually is. From vertical storage to hidden compartments, every inch of space can be utilized effectively.

Learn about:
- Space-saving furniture solutions
- Creative storage ideas
- Color schemes that enhance space
- Lighting techniques
- Multi-functional room layouts`,
    author: {
      name: 'Darpan Lekharu',
      role: 'Founder & Principal Designer',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    },
    category: 'Tips & Tricks',
    image:
      'test',
    date: 'February 25, 2024',
    readTime: '6 min read',
  },
];
