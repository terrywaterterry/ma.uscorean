'use client';

import { useEffect } from "react";

interface PostContentProps {
  html: string;
}

export const PostContent: React.FC<PostContentProps> = ({ html }) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const containers = document.querySelectorAll(".bsa-pro-container");

    containers.forEach(container => {
      const scripts = container.getElementsByTagName("script");

      Array.from(scripts).forEach(oldScript => {
        const newScript = document.createElement("script");
        newScript.text = oldScript.text;
        document.body.appendChild(newScript);
      });
    });
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
