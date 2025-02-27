import Navbar from '@/app/components/Navbar';
import Footer from "@/app/components/Footer";
import RichText from "@/app/components/RichText";
import { getBlogPostBySlug, getAllBlogPosts } from '@/app/lib/contentful';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
// Or use a specific revalidation period (in seconds)
// export const revalidate = 3600; // Revalidate at most every hour

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const { title, publishDate, featuredImage, content, author } = post.fields;
  
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
  
  return (
    <div className="flex flex-col items-stretch justify-between min-h-screen dark:bg-slate-950">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 mt-20 max-w-3xl">
        <article>
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">{title}</h1>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
              {author && (
                <div className="flex items-center mr-6">
                  {author.fields.picture && (
                    <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                      <Image 
                        src={`https:${author.fields.picture.fields.file.url}`}
                        alt={author.fields.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span>{author.fields.name}</span>
                </div>
              )}
              <time dateTime={publishDate}>{formattedDate}</time>
            </div>
            
            {featuredImage && (
              <div className="relative h-[400px] w-full mb-8">
                <Image 
                  src={`https:${featuredImage.fields.file.url}`}
                  alt={featuredImage.fields.title || title}
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </header>
          
          <div className="prose lg:prose-lg dark:prose-invert prose-img:rounded-lg mx-auto">
            <RichText content={content} />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}