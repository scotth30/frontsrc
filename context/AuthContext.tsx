import  { createContext, ReactNode, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig'; // adjust the import to your config file path

export interface AuthContextType {
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}


  export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user);
        setLoading(false);
      });
  
      return unsubscribe;
    }, []);
  
    // If loading is true, show a loading message or spinner. Otherwise, render the children.
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {loading ? <div>Loading...</div> : children}
      </AuthContext.Provider>
    );
  };
  