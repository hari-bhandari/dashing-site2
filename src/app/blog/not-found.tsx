import Link from 'next/link';
import Navbar from '@/app/components/Navigation/Navbar';
import Footer from '@/app/components/Navigation/Footer';

export default function BlogNotFound() {
  return (
    <div className="flex flex-col items-stretch justify-between min-h-screen dark:bg-slate-950">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 dark:text-white">404</h1>
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Blog Post Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We couldn&apos;t find the blog post you were looking for.
          </p>
          <Link 
            href="/blog" 
            className="px-6 py-3 bg-[#22263e] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}