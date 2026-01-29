import React, { FC } from 'react'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import SingleTitle from './SingleTitle'
import PostMeta2 from '@/components/PostMeta2/PostMeta2'
import SingleMetaAction2 from './SingleMetaAction2'
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment'
import { FragmentTypePostFullFields } from '../type'

// PostContent import
import { PostContent } from './PostContent'

export interface SingleHeaderProps {
	hiddenDesc?: boolean
	titleMainClass?: string
	className?: string
	post: FragmentTypePostFullFields
}

const SingleHeader: FC<SingleHeaderProps> = ({
	titleMainClass,
	hiddenDesc = false,
	className = '',
	post,
}) => {
	const {
		title,
		excerpt,
		content,
		ncPostMetaData,
		categories,
		commentCount,
		databaseId,
		uri,
	} = getPostDataFromPostFragment(post || {})

	// HTML 태그 제거 함수
	const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '')

	// 글자 수 제한
	const truncatedExcerpt = excerpt
		? stripHtml(excerpt).slice(0, 100) +
		  (stripHtml(excerpt).length > 100 ? '...' : '')
		: ''

	return (
		<>
			<div className={`nc-SingleHeader ${className}`}>
				<div className="space-y-4 lg:space-y-5">
					<CategoryBadgeList
						itemClass="!px-3"
						categories={categories?.nodes || []}
					/>
					<SingleTitle mainClass={titleMainClass} title={title || ''} />

					{!hiddenDesc && (
						<div className="max-w-screen-md break-words pb-1 text-base text-neutral-500 lg:text-lg dark:text-neutral-400">
							{truncatedExcerpt}
						</div>
					)}

					{/* 광고 + 본문 렌더링 */}
					<PostContent html={content || ''} />

					<div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>

					<div className="flex flex-wrap justify-between gap-5 sm:items-end">
						<PostMeta2
							size="large"
							className="flex-shrink-0 leading-none"
							hiddenCategories
							avatarRounded="rounded-full shadow-inner"
							post={{ ...post }}
						/>
						<SingleMetaAction2 post={post} />
					</div>
				</div>
			</div>
		</>
	)
}

export default SingleHeader
