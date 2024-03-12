/** @format */

// import './App.css';
import { Layout } from 'antd';
import Posts from './screens/Posts';
import SiderComponent from './components/SiderComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<Layout>
								<SiderComponent />
								<Posts />
							</Layout>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
