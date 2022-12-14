import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
} from 'react-router-dom';
import { Login, Register, Write, Single, Home } from './pages/';
import { Footer, Navbar } from './components';
import './style.scss'

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{ path: '/post/:id', element: <Single /> },
			{ path: '/write', element: <Write /> },
		],
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

function App() {
	return (
		<div className='app'>
			<div className='container'>
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
