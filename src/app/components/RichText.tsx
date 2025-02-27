"use client";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm">{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-6">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-bold mb-4 mt-6">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl font-bold mb-4 mt-6">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg font-bold mb-4 mt-6">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-base font-bold mb-4 mt-6">{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-8 mb-6 space-y-2">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-8 mb-6 space-y-2">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 italic mb-6">{children}</blockquote>,
    [BLOCKS.HR]: () => <hr className="mb-6" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, file } = node.data.target.fields;
      const { url, details } = file;
      const { width, height } = details.image || { width: 800, height: 600 };
      
      return (
        <div className="my-8">
          <Image
            src={`https:${url}`}
            alt={title}
            width={width}
            height={height}
            className="mx-auto rounded-lg"
          />
          {title && <p className="text-sm text-center text-gray-500 mt-2">{title}</p>}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <Link href={uri} className="text-blue-600 dark:text-blue-400 hover:underline">
          {children}
        </Link>
      );
    },
  },
};

export default function RichText({ content }) {
  if (!content) return null;
  return <div className="prose dark:prose-invert max-w-none">{documentToReactComponents(content, options)}</div>;
}