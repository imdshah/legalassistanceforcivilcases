import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserType = 'layperson' | 'advocate';

interface User {
  id: string;
  email: string;
  userType: UserType;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, userType: UserType) => void;
  signup: (email: string, password: string, userType: UserType) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, userType: UserType) => {
    // Simulate authentication
    setUser({ id: '1', email, userType });
  };

  const signup = (email: string, password: string, userType: UserType) => {
    // Simulate registration
    setUser({ id: '1', email, userType });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}