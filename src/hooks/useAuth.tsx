import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from 'react';

type User = { email: string } | null;

type AuthContextType = {
  user: User;
  currentUser: (user: { email: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = { children: ReactNode };

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>(null);

  const currentUser = (user: { email: string } | null) => setUser(user);
  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, currentUser, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
