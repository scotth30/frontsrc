import { createContext, ReactNode, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig'; // adjust the import to your config file path
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
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
  const navigate = useNavigate(); // Use the hook to navigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);

      if (user) { // If the user is logged in, redirect to the dashboard
        navigate('/dashboard');
      }
    });

    return unsubscribe;
  }, [navigate]); // Include navigate as a dependency

  // If loading is true, show a loading message or spinner. Otherwise, render the children.
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {loading ? <CircularProgress /> : children}
    </AuthContext.Provider>
  );
};
