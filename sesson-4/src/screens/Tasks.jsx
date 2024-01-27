/** @format */

import React, { useState } from 'react';
import { tasks } from '../data/tasks';

const Tasks = () => {
	const [filterValue, setFilterValue] = useState('completed');

	const renderTasks = () => {
		const items = tasks.filter(
			(element) => element.isCompleted === (filterValue === 'completed')
		);

		return items.map((task) => (
			<p>
				<input type='checkbox' checked={task.isCompleted} name='' id='' />
				{task.title}
			</p>
		));
	};

	return (
		<div>
			<button
				onClick={() => setFilterValue('unComplete')}
				style={{
					border: `1px solid ${
						filterValue === 'unComplete' ? 'white' : 'black'
					}`,
				}}>
				Uncomplete {tasks.filter((element) => !element.isCompleted).length}
			</button>
			<button
				onClick={() => setFilterValue('completed')}
				style={{
					border: `1px solid ${
						filterValue === 'completed' ? 'white' : 'black'
					}`,
				}}>
				Completed {tasks.filter((element) => element.isCompleted).length}
			</button>
			{renderTasks()}
		</div>
	);
};

export default Tasks;
