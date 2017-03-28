import React, { PropTypes } from 'react';
import VisibleTagList from '../../containers/user/VisibleTagList'

const SuccessTagCategory = ({tagCategories}) => (
	<div>
		{tagCategories.map(tagCategory =>
			<VisibleTagList  
				key={tagCategory.id}
				title={tagCategory.title}
				categoryTitle={tagCategory.categoryTitle}
				{...tagCategory}
			/>
		)}
	</div>
)

export default SuccessTagCategory;