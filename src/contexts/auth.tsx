import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import api, { authenticateAPI, unauthenticateAPI } from '../services/api-service';
import { getUserDataService, signinService } from '@/api/auth';
import { useRouter } from 'next/router'
import LoadingScreen from '@/components/LoadingScreen/loadingscreen';

interface IUser {
    name: string;
    email: string;
    selectedCharacter:number;
    alternalName: string
}

interface IAuth {
    isAuthenticated: boolean,
    user: IUser | null,
    signIn: (email: string, password: string) => Promise<boolean>;
    isLoading: boolean,
    signOut: () => void;
    restoreSession: (token: string) => void;
}

const AuthContext = createContext<IAuth>({
    isAuthenticated: false,
    isLoading: false,
    restoreSession: () => { },
    signIn: async () => { return false },
    signOut: () => { },
    user: null
});

export const AuthProvider = ({ children }: any) => {
    const router = useRouter()

    const [user, setUser] = useState<IUser | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const isAuthenticated = !!user;

    useEffect(() => {
        const Component = children.type;

        // If it doesn't require auth, everything's good.
        if (!Component.requiresAuth) {
            setIsLoading(false);
            return;
        }

        // If we're already authenticated, everything's good.
        if (isAuthenticated) return;

        // If we don't have a token in the cookies, logout
        const token = Cookies.get("token");
        if (!token) {
            return signOut();
        }
        // If we're not loading give the try to authenticate with the given token.
        if (!isLoading) {
            restoreSession(token);
        }
    }, [isLoading, isAuthenticated, children.type.requiresAuth])

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) return;
        restoreSession(token);
    }, []);

    //This function is called when new user is registered and when users restore session
    const restoreSession = async (token: string) => {
        setIsLoading(true);
        authenticateAPI(token);
        try {
            const response = await getUserDataService()
            if (response.ok) {
                Cookies.set('token', token, { expires: 60, })
                setUser(response.data.user);
            } else {
                signOut()
            }

        } catch (error) {
            signOut()
        }
        setIsLoading(false)
    }

    const signIn = async (email: string, password: string): Promise<boolean> => {
        try {
            setIsLoading(true);
            const response = await signinService({ email, password })
            setIsLoading(false);
            if (response.ok) {
                console.log("Got token")
                Cookies.set('token', response.data.token, { expires: 60 })
                authenticateAPI(response.data.token);
                setUser({
                    email: response.data.email,
                    name: response.data.name,
                    alternalName: response.data.alternalName,
                    selectedCharacter: response.data.selectedCharacter
                })
                return true;
            } else {
                return false;
            }

        } catch (error) {
            return false;
        }
    }

    const signOut = () => {
        Cookies.remove('token')
        setUser(null)
        unauthenticateAPI()
        router.push('/signin')
        setIsLoading(false)
    }

    if (isLoading) return <LoadingScreen />

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, restoreSession, isLoading, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
