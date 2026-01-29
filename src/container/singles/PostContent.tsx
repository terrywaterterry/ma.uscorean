'use client'

import React from 'react'

interface PostContentProps {
  html: string
}

export const PostContent: React.FC<PostContentProps> = ({ html }) => {
  if (!html) return null

  return (
    <div
      className="nc-PostContent prose prose-neutral dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
