import { createContext } from 'react'
import { useState } from 'react'

const dropContext = createContext()

export const DropProvider = ({ children }) => {
	const [User, setUser] = useState({login:false});
    const [Files,setFiles] = useState([]);

	return (
		<dropContext.Provider value={{ User,setUser,Files,setFiles}}>
			{children}
		</dropContext.Provider>
	)
}

export default dropContext