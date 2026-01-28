'use client';

interface PostContentProps {
  html: string;
}

export const PostContent: React.FC<PostContentProps> = ({ html }) => {
  // 단순히 HTML 렌더링만
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
