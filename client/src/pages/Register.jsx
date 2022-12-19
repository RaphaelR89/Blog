import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [err, setError] = useState(null);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('/auth/register', inputs);
			console.log(res);
		} catch (err) {
			setError(err.response.data);
		}
	};

	return (
		<div className='auth'>
			<h1>Register</h1>
			<form action=''>
				<input
					required
					type='text'
					placeholder='username'
					name='username'
					onChange={handleChange}
				/>
				<input
					required
					type='email'
					placeholder='email'
					name='email'
					onChange={handleChange}
				/>
				<input
					required
					type='password'
					placeholder='password'
					name='password'
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Register</button>
				{err && <p>{err}</p>}
				<span>
					Do you have an account? <Link to='/login'>Login</Link>
				</span>
			</form>
		</div>
	);
};
export default Register;
