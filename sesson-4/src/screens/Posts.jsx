/** @format */

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Input, List, Space, Tag } from 'antd';
import { useSearchParams } from 'react-router-dom';

const baseUrl = `https://jsonplaceholder.typicode.com`;

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchKey, setSearchKey] = useState('');
	const [results, setResults] = useState([]);
	const [postsByid, setPostsByid] = useState([]);

	const [useParams] = useSearchParams();

	const uid = useParams.get('uid');

	useEffect(() => {
		getPosts();
	}, []);

	useEffect(() => {
		if (!searchKey) {
			setResults([]);
		} else {
			const items = posts.filter((element) =>
				element.title.includes(searchKey)
			);

			setResults(items);
		}
	}, [searchKey]);

	useEffect(() => {
		if (posts.length > 0 && uid) {
			handleFilterPostsById();
		}
	}, [uid, posts]);

	const getPosts = async () => {
		const api = `/posts`;

		setIsLoading(true);

		try {
			const res = await axios.get(`${baseUrl}${api}`);

			if (res && res.status === 200 && res.data) {
				setPosts(res.data);
			}

			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	const handleFilterPostsById = () => {
		const items = posts.filter((element) => `${element.userId}` === uid);
		setPostsByid(items);
	};

	return (
		<div className='container'>
			<div className='row mt-4 mb-4'>
				<div className='col-8 offset-2'>
					<Card>
						<div className='mb-2'>
							<Input.Search
								value={searchKey}
								onChange={(val) => setSearchKey(val.target.value)}
								placeholder='Search'
								allowClear
								size='large'
							/>
						</div>
						<List
							// isLoading={isLoading}
							pagination
							itemLayout='vertical'
							dataSource={searchKey ? results : postsByid ? postsByid : posts}
							renderItem={(post, index) => (
								<List.Item>
									<List.Item.Meta title={post.title} description={post.body} />
								</List.Item>
							)}
						/>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Posts;
