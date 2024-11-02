export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  details: {
    client: string;
    location: string;
    year: string;
    scope: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'modern-minimalist-home',
    title: 'Modern Minimalist Home',
    category: 'Residential',
    description: 'A contemporary home design that embraces minimalism while maintaining warmth and functionality.',
    fullDescription: 'This modern minimalist home project showcases our ability to create spaces that are both sophisticated and welcoming. We focused on clean lines, neutral colors, and natural materials to achieve a perfect balance between aesthetics and comfort.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80'
    ],
    details: {
      client: 'Johnson Family',
      location: 'Beverly Hills, CA',
      year: '2023',
      scope: ['Interior Design', 'Space Planning', 'Furniture Selection', 'Lighting Design']
    }
  },
  {
    id: 'luxury-restaurant',
    title: 'Luxury Restaurant',
    category: 'Commercial',
    description: 'An upscale dining establishment featuring elegant design elements and sophisticated atmosphere.',
    fullDescription: 'This luxury restaurant project required a delicate balance between sophistication and comfort. We created an atmosphere that enhances the dining experience through careful consideration of lighting, acoustics, and spatial flow.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507652313558-2c4b3f3c5b3a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507652313542-9ac3f3c0b3a7?auto=format&fit=crop&q=80'
    ],
    details: {
      client: 'La Maison Group',
      location: 'Manhattan, NY',
      year: '2023',
      scope: ['Interior Design', 'Custom Furniture', 'Lighting Design', 'Acoustic Planning']
    }
  },
  {
    id: 'corporate-office',
    title: 'Corporate Office',
    category: 'Commercial',
    description: 'A modern office space designed to promote productivity and employee well-being.',
    fullDescription: 'This corporate office project demonstrates our expertise in creating productive workspaces that inspire creativity and collaboration while maintaining a professional atmosphere.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
    gallery: [
      'src/data/images/landscape-placeholder.svg',
      'src/data/images/landscape-placeholder.svg',
      'src/data/images/landscape-placeholder.svg'
    ],
    details: {
      client: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      year: '2023',
      scope: ['Space Planning', 'Interior Design', 'Ergonomic Solutions', 'Collaborative Spaces']
    }
  }
  ,
  {
    id: 'corporate-office',
    title: 'Corporate Office',
    category: 'Commercial',
    description: 'A modern office space designed to promote productivity and employee well-being.',
    fullDescription: 'This corporate office project demonstrates our expertise in creating productive workspaces that inspire creativity and collaboration while maintaining a professional atmosphere.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
    gallery: [
      'src/data/images/landscape-placeholder.svg',
      'src/data/images/landscape-placeholder.svg',
      'src/data/images/landscape-placeholder.svg'
    ],
    details: {
      client: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      year: '2023',
      scope: ['Space Planning', 'Interior Design', 'Ergonomic Solutions', 'Collaborative Spaces']
    }
  },
  {
    id: 'corporate-office',
    title: 'Corporate Office',
    category: 'Commercial',
    description: 'A modern office space designed to promote productivity and employee well-being.',
    fullDescription: 'This corporate office project demonstrates our expertise in creating productive workspaces that inspire creativity and collaboration while maintaining a professional atmosphere.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
    gallery: [
      'src/data/images/landscape-placeholder.svg',
      'src/data/images/landscape-placeholder.svg',
      'src/data/images/landscape-placeholder.svg'
    ],
    details: {
      client: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      year: '2023',
      scope: ['Space Planning', 'Interior Design', 'Ergonomic Solutions', 'Collaborative Spaces']
    }
  }
];