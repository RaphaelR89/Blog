import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext;

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem('user') || null)
	);
};
