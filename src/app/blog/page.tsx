import Navbar from '@/app/components/Navbar';
import Footer from "@/app/components/Footer";
import { getAllBlogPosts } from '@/app/lib/contentful';
import Image from 'next/image';
import Link from 'next/link';

// Server Component by default
export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();
  
  return (
    <div className="flex flex-col items-stretch justify-between min-h-screen dark:bg-slate-950">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 mt-20">
        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Latest Blog Posts...</h1>
        
        {blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-medium dark:text-white">No blog posts yet. Check back soon!</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.sys.id} post={post} />
            ))}
          </div>
        )}
      </main>
      
      <Footer /> 
    </div>
  );
}

function BlogPostCard({ post }) {
  const { title, slug, publishDate, featuredImage, excerpt } = post.fields;
  const imageUrl = featuredImage?.fields?.file?.url || '';
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
  
  return (
    <Link href={`/blog/${slug}`} className="group">
      <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 h-full flex flex-col hover:shadow-xl hover:scale-[1.02]">
        {imageUrl && (
          <div className="relative h-48 w-full">
            <Image 
              src={`https:${imageUrl}`} 
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">{formattedDate}</span>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 flex-grow">{excerpt}</p>
          <div className="mt-4">
            <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
              Read More
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}