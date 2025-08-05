import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react';

type User = {
  id: string;
  name: string;
  email: string;
} | null;

interface AuthContextType {
  user: User;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      // const storedUser: User = null; 
      const storedUser: User = {
      id: '1',
      name: 'Chinonso Chikelue',
      email: 'nonso@savipay.com',
    };
      setUser(storedUser);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
