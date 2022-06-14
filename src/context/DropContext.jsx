import { createContext } from 'react'
import { useState } from 'react'

const dropContext = createContext()

export const DropProvider = ({ children }) => {
	const [User, setUser] = useState({login:false});

	return (
		<dropContext.Provider value={{ User,setUser }}>
			{children}
		</dropContext.Provider>
	)
}

export default dropContext