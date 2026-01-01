import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isVipMember: boolean;
  membershipPlan?: string;
  membershipPrice?: string;
  membershipExpiry?: Date;
  trialEnd?: Date;
  credits: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: { email: string; password: string; firstName: string; lastName: string; }) => Promise<boolean>;
  updateMembership: (plan: string, price: string) => void;
  startTrial: (plan: string, price: string) => void;
  getMembershipDiscount: () => number;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Static credentials from .env
const TEST_USER_EMAIL = process.env.REACT_APP_TEST_USER_EMAIL;
const TEST_USER_PASSWORD = process.env.REACT_APP_TEST_USER_PASSWORD;

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check session on app load
  useEffect(() => {
    const savedUserData = localStorage.getItem('user_session');
    if (savedUserData) {
      try {
        const userData = JSON.parse(savedUserData);
        setUser({
          ...userData,
          membershipExpiry: userData.membershipExpiry ? new Date(userData.membershipExpiry) : undefined,
          trialEnd: userData.trialEnd ? new Date(userData.trialEnd) : undefined
        });
      } catch (err) {
        localStorage.removeItem('user_session');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (email === TEST_USER_EMAIL && password === TEST_USER_PASSWORD) {
      const newUser: User = {
        id: '1',
        email: TEST_USER_EMAIL,
        firstName: 'Test',
        lastName: 'User',
        isVipMember: false,
        credits: 0
      };
      
      localStorage.setItem('user_session', JSON.stringify(newUser));
      setUser(newUser);
      setLoading(false);
      return true;
    } else {
      setError('Invalid email or password');
      setLoading(false);
      return false;
    }
  };

  const register = async (userData: { email: string; password: string; firstName: string; lastName: string; }): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setError('Registration is currently disabled. Please use test account.');
    setLoading(false);
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user_session');
    setUser(null);
    setError(null);
  };

  const updateMembership = (plan: string, price: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        membershipPlan: plan,
        membershipPrice: price,
        isVipMember: true,
        membershipExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        credits: user.credits + 100
      };
      setUser(updatedUser);
      localStorage.setItem('user_session', JSON.stringify(updatedUser));
    }
  };

  const startTrial = (plan: string, price: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        membershipPlan: plan,
        membershipPrice: price,
        isVipMember: true,
        trialEnd: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        membershipExpiry: new Date(Date.now() + 33 * 24 * 60 * 60 * 1000),
        credits: user.credits + 50
      };
      setUser(updatedUser);
      localStorage.setItem('user_session', JSON.stringify(updatedUser));
    }
  };

  const getMembershipDiscount = (): number => {
    if (!user || !user.isVipMember) return 0;
    
    const price = parseFloat(user.membershipPrice || '0');
    if (price >= 59.99) return 0.25; // 25% скидка для VIP
    if (price >= 49.99) return 0.20; // 20% скидка для Gold
    if (price >= 39.99) return 0.15; // 15% скидка для Prime
    if (price >= 29.99) return 0.12; // 12% скидка для Basic
    if (price >= 19.99) return 0.08; // 8% скидка для Starter
    if (price >= 9.99) return 0.05; // 5% скидка для Starter Mini
    
    return 0;
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    error,
    login,
    logout,
    register,
    updateMembership,
    startTrial,
    getMembershipDiscount,
    clearError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};