"use client";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5">{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p className="mb-6">{children}</p>,
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => <h1 className="text-4xl font-bold mt-10 mb-4">{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => <h2 className="text-3xl font-bold mt-8 mb-3">{children}</h2>,
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <h3 className="text-2xl font-bold mt-6 mb-2">{children}</h3>,
    [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul className="list-disc pl-6 mb-6">{children}</ul>,
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => <ol className="list-decimal pl-6 mb-6">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li className="mb-2">{children}</li>,
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6">{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-300 dark:border-gray-700" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node.data.target.fields;
      const { url, details } = file;
      const imageUrl = `https:${url}`;
      const { height, width } = details.image || { height: 400, width: 600 };
      
      return (
        <div className="my-8">
          <div className="relative" style={{ height: `${Math.min(400, height)}px` }}>
            <Image 
              src={imageUrl} 
              alt={description || title} 
              className="rounded-lg object-contain"
              fill
            />
          </div>
          {title && <p className="text-center text-sm text-gray-500 mt-2">{title}</p>}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      const { uri } = node.data;
      const isInternal = uri.startsWith('/');
      
      if (isInternal) {
        return <Link href={uri} className="text-blue-600 hover:underline">{children}</Link>;
      }
      
      return (
        <a href={uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {children}
        </a>
      );
    },
  },
};

interface RichTextProps {
  content: any;
}

export default function RichText({ content }: RichTextProps) {
  if (!content) {
    return null;
  }
  
  return <>{documentToReactComponents(content, options)}</>;
}