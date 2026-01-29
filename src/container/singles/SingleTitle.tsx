import React, { FC } from 'react'

export interface SingleTitleProps {
  title: string
  mainClass?: string
}

const SingleTitle: FC<SingleTitleProps> = ({
  title,
  mainClass = '',
}) => {
  return (
    <h1 className={mainClass}>
      {title}
    </h1>
  )
}

export default SingleTitle
