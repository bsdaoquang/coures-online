/** @format */

import PostItem from '../components/PostItem';
import { posts } from '../data/posts';

const Posts = () => {
	return (
		<div>
			<h1>Post</h1>
			{posts.map((item, index) => (
				<PostItem item={item} key={item.id} />
			))}
		</div>
	);
};

export default Posts;
