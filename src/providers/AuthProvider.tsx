import { createContext, useContext, useEffect, useState } from "react"

type User = {
    email: string
    token: string
}

type AuthProviderState = {
    user: User | null
    setUser: (user: User | null) => void
}

const initialState: AuthProviderState = {
    user: null,
    setUser: () => null,
}

export const useAuth = () => useContext(AuthProviderContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        // get user from local storage
        const user = localStorage.getItem("user")
        if (user) {
            setUser(JSON.parse(user))
        }
    }, [])

    return (
        <AuthProviderContext.Provider value={{ user, setUser }}>
            {children}
        </AuthProviderContext.Provider>
    )
}


export const AuthProviderContext = createContext<AuthProviderState>(initialState)

export default AuthProvider