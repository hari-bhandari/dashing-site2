"use client";

import Footer from "@/app/components/Footer";
import RichText from "@/app/components/Blog/RichText";
import { getBlogPostBySlug } from '@/app/lib/contentful';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import dynamic from 'next/dynamic';
import { Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

const DynamicNavbar = dynamic(() => import('@/app/components/Navbar'), {
  ssr: false
});


interface BlogPostFields {
  title: string;
  slug: string;
  publishDate: string;
  content: Document; 
  featuredImage?: {
    fields: {
      title?: string;
      file: {
        url: string;
      };
    };
  };
  author?: {
    fields: {
      name: string;
      picture?: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  };
}

interface BlogPostProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const slug = resolvedParams.slug;
  
  const [post, setPost] = useState<Entry<BlogPostFields> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const fetchedPost = await getBlogPostBySlug(slug);
        if (!fetchedPost) {
          notFound();
        }
        setPost(fetchedPost as Entry<BlogPostFields>);
      } catch (error) {
        console.error("Failed to load blog post:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center dark:bg-slate-950">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  if (!post) {
    return notFound();
  }

  const { title, publishDate, featuredImage, content, author } = post.fields;
  
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
  
  return (
    <div className="flex flex-col items-stretch justify-between min-h-screen dark:bg-slate-950">
      <DynamicNavbar />
      
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