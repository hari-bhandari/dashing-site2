"use client";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS, Document } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';

interface RichTextProps {
  content: Document;
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => <p className="mb-6">{children}</p>,
    [BLOCKS.HEADING_1]: (_node: any, children: React.ReactNode) => (
      <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: any, children: React.ReactNode) => (
      <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: React.ReactNode) => (
      <h3 className="text-2xl font-bold mb-4 mt-6">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_node: any, children: React.ReactNode) => (
      <h4 className="text-xl font-bold mb-4 mt-6">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_node: any, children: React.ReactNode) => (
      <h5 className="text-lg font-bold mb-4 mt-6">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_node: any, children: React.ReactNode) => (
      <h6 className="text-base font-bold mb-4 mt-6">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: React.ReactNode) => (
      <ul className="list-disc pl-8 mb-6 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: any, children: React.ReactNode) => (
      <ol className="list-decimal pl-8 mb-6 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: React.ReactNode) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (_node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 italic mb-6">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="mb-6" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      try {
        const { title, file } = node.data.target.fields;
        const { url } = file;
        const imageWidth = file.details?.image?.width || 800;
        const imageHeight = file.details?.image?.height || 600;

        return (
          <div className="my-8">
            <Image
              src={`https:${url}`}
              alt={title || "Blog image"}
              width={imageWidth}
              height={imageHeight}
              className="mx-auto rounded-lg"
            />
            {title && <p className="text-sm text-center text-gray-500 mt-2">{title}</p>}
          </div>
        );
      } catch (error) {
        console.error("Error rendering embedded asset:", error);
        return <p>Error rendering embedded asset</p>;
      }
    },
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      const { uri } = node.data;
      return (
        <Link 
          href={uri} 
          className="text-blue-600 dark:text-blue-400 hover:underline"
          target={uri.startsWith('http') ? '_blank' : '_self'}
          rel={uri.startsWith('http') ? 'noopener noreferrer' : ''}
        >
          {children}
        </Link>
      );
    },
  },
};

export default function RichText({ content }: RichTextProps) {
  if (!content) return null;
  
  return (
    <div className="prose dark:prose-invert max-w-none">
      {documentToReactComponents(content, options)}
    </div>
  );
}