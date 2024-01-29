/** @format */

import PostItem from '../components/PostItem';
import { posts } from '../data/posts';
import { Avatar, Button, List, Space } from 'antd';

const Posts = () => {
	return (
		<div className='container'>
			{/* 			
			{posts.map((post, index) => (
					// <PostItem
					// 	index={index}
					// 	title={post.title}
					// 	description={post.body}
					// 	key={post.id}
					// 	score={post.score}
					// />
			))} */}

			<List
				itemLayout='vertical'
				dataSource={posts}
				renderItem={(post, index) => (
					<List.Item>
						<List.Item.Meta
							title={post.title}
							description={post.body}
							avatar={<Avatar>{post.userId}</Avatar>}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default Posts;
