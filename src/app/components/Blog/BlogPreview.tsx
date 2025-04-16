"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/app/components/Blog/hooks/use-outside-click";
import Link from "next/link";

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  slug?: string; 
};



// Import your existing contentful functions
import { BlogPost } from "@/app/lib/contentful";

// Function to fetch preview blog posts
async function fetchPreviewBlogPosts() {
  try {
    // Since getAllBlogPosts runs on the server, we need to use it in an API route
    const response = await fetch('/api/blog-preview');
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: [] };
  }
}

// Function to convert Contentful blog posts to Card format
function convertContentfulBlogsToCards(posts: BlogPost[]): Card[] {
  return posts.map(post => ({
    src: post.fields.featuredImage 
      ? `https:${post.fields.featuredImage.fields.file.url}` 
      : '/blog/default-image.jpg',
    title: post.fields.title,
    category: 'Blog', // You might want to add a category field to your Contentful model
    content: (
      <>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          {post.fields.excerpt || 'Click to read the full article'}
        </p>
        <Link 
          href={`/blog/${post.fields.slug}`}
          className="px-6 py-3 bg-[#22263e] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
        >
          Read Full Article
        </Link>
      </>
    ),
    slug: post.fields.slug
  }));
}

// Create context for card management
const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

// Create BlurImage component
const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

// Create Card component
const BlogCard = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [setOpen, onCardClose, index]);
  
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  useOutsideClick(containerRef, () => handleClose());

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

// Main component with internally defined props
interface BlogPreviewProps {
  blogs: Array<{
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
  }>;
  initialScroll?: number;
}

export default function BlogPreview({ blogs = [], initialScroll = 0, useCMS = true }: BlogPreviewProps & { useCMS?: boolean }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cmsBlogs, setCmsBlogs] = useState<Card[]>([]);
  const [loading, setLoading] = useState(useCMS);
  const [error, setError] = useState(false);

  // Fetch CMS posts on component mount if useCMS is true
  useEffect(() => {
    if (useCMS) {
      const loadPosts = async () => {
        try {
          setLoading(true);
          const data = await fetchPreviewBlogPosts();
          if (data.posts && data.posts.length > 0) {
            const formattedPosts = convertContentfulBlogsToCards(data.posts);
            setCmsBlogs(formattedPosts);
          }
        } catch (err) {
          console.error('Error loading blog posts:', err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      
      loadPosts();
    }
  }, [useCMS]);

  // Determine which blogs to display
  const displayBlogs = useCMS && cmsBlogs.length > 0 ? cmsBlogs : blogs;

  // Your existing scroll handling code
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll, displayBlogs]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  return (
    <div className="w-full">
      <div className="text-center mb-2 md:mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Our Latest Blog Posts
        </h2>
        <p className="mt-2 md:mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          Insights, updates, and expert perspectives on distribution software and industry trends
        </p>
        <div className="mt-4 mb-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-base font-medium text-white bg-[#22263e] hover:bg-blue transition duration-200"
          >
            View All Posts
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-pulse flex space-x-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-3xl bg-gray-200 dark:bg-neutral-800 h-80 w-56 md:h-[40rem] md:w-96"></div>
            ))}
          </div>
        </div>
      ) : error || (useCMS && cmsBlogs.length === 0) ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">
            {error ? "Unable to load blog posts. Please try again later." : "No blog posts available at this time."}
          </p>
        </div>
      ) : (
        <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
          <div className="relative w-full">
            <div
              className="flex w-full overflow-x-scroll overscroll-x-auto py-6 md:py-10 scroll-smooth [scrollbar-width:none]"
              ref={carouselRef}
              onScroll={checkScrollability}
            >
              <div
                className={cn(
                  "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
                )}
              ></div>

              <div
                className={cn(
                  "flex flex-row justify-start gap-4 pl-4",
                  "max-w-7xl mx-auto"
                )}
              >
                {displayBlogs.map((blog, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.2 * index,
                        ease: "easeOut",
                        once: true,
                      },
                    }}
                    key={"card" + index}
                    className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
                  >
                    <BlogCard card={blog} index={index} layout={true} />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2 mr-10">
              <button
                id="scroll-left"
                aria-label="Scroll left"
                className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center disabled:opacity-50"
                onClick={scrollLeft}
                disabled={!canScrollLeft}
              >
                <IconArrowNarrowLeft className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              </button>
              <button
                id="scroll-right"
                aria-label="Scroll right"
                className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center disabled:opacity-50"
                onClick={scrollRight}
                disabled={!canScrollRight}
              >
                <IconArrowNarrowRight className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </CarouselContext.Provider>
      )}
    </div>
  );
}