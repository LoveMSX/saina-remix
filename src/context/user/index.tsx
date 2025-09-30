import { createContext, useContext, useEffect, useState, type JSX } from "react";

import type { UserActions } from "../../interfaces/user";
import type { LoginDTO } from "../../data/dto/login";
import type { UserDTO } from "../../data/dto/user";

const userContext = createContext<UserActions>({} as UserActions)

const AuthProvider = (props: {children: JSX.Element}) => {
    const [user,setUser] = useState<UserDTO | undefined>(undefined)

    useEffect(() => {
        const token = localStorage.getItem('access-token')
        if(token) {
            setUser({
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password',
                created_at: '2021-01-01T00:00:00.000Z',
                updated_at: '2021-01-01T00:00:00.000Z',
            })
        }
    },[])
    const login = ({email, password}:LoginDTO) => {
        console.log({email,password});
        localStorage.setItem('access-token', 'token')
        setUser({
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password',
                created_at: '2021-01-01T00:00:00.000Z',
                updated_at: '2021-01-01T00:00:00.000Z',
            })
    }
    const logout = () => {
        setUser(undefined)
        localStorage.removeItem('access-token')
        window.location.href = '/'
    }

    return (
        <userContext.Provider value={{login,logout,user}}>
            {props.children}
        </userContext.Provider>
    )
}

export default AuthProvider
export const UseAuth = () => useContext(userContext)