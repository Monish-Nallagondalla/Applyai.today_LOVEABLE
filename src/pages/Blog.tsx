import React from 'react';

const BlogCard = ({ title, date, excerpt, imageUrl, category }: { 
  title: string; 
  date: string; 
  excerpt: string; 
  imageUrl: string;
  category: string;
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-primary">{category}</span>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <button className="text-primary hover:text-primary/80 transition-colors flex items-center text-sm">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      date: "June 15, 2023",
      category: "AI Trends",
      excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities across industries.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Machine Learning Best Practices",
      date: "May 28, 2023",
      category: "Machine Learning",
      excerpt: "Learn the essential best practices for implementing effective machine learning models in your organization.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Understanding Natural Language Processing",
      date: "May 12, 2023",
      category: "NLP",
      excerpt: "A comprehensive guide to natural language processing and how it's enabling computers to understand human language.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Ethical Considerations in AI Development",
      date: "April 30, 2023",
      category: "Ethics",
      excerpt: "Exploring the ethical challenges and responsibilities that come with developing advanced AI systems.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Computer Vision Applications",
      date: "April 15, 2023",
      category: "Computer Vision",
      excerpt: "Discover the revolutionary applications of computer vision technology across different sectors.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Getting Started with Reinforcement Learning",
      date: "March 27, 2023",
      category: "Reinforcement Learning",
      excerpt: "A beginner's guide to understanding and implementing reinforcement learning algorithms.",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <BlogCard 
            key={post.id}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
