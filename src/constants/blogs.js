import { react as reactLogo, python, aws, gcp, startup, hosting } from '../assets';
import blogsData from '../data/blogs.json';

// Image mapping - maps string identifiers to actual image imports
const imageMap = {
  react: reactLogo,
  python: python,
  aws: aws,
  gcp: gcp,
  startup: startup,
  hosting: hosting,
};

// Process blog posts and map image strings to actual imports
export const blogPosts = blogsData.map(post => {
  // If image starts with http/https, it's a URL - use it directly
  const isUrl = post.image?.startsWith('http://') || post.image?.startsWith('https://');
  
  return {
    ...post,
    image: isUrl 
      ? post.image  // Use URL directly
      : imageMap[post.image] || python, // Map to local asset
  };
});

export const findPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
