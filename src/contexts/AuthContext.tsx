import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI, User as ApiUser, SignupData, SigninData } from '../services/api';

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

// Преобразование пользователя из API в формат приложения
const transformApiUser = (apiUser: ApiUser): User => ({
  id: apiUser.id.toString(),
  email: apiUser.email,
  firstName: apiUser.firstName || '',
  lastName: apiUser.lastName || '',
  isVipMember: false, // По умолчанию новый пользователь не VIP
  membershipPlan: undefined,
  membershipPrice: undefined,
  membershipExpiry: undefined,
  trialEnd: undefined,
  credits: 0
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Проверка аутентификации при загрузке приложения
  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (authAPI.isAuthenticated()) {
          const profileData = await authAPI.getProfile();
          let transformedUser = transformApiUser(profileData.user);
          
          // Попытаемся восстановить данные о членстве из localStorage
          const savedUser = localStorage.getItem('user_membership');
          if (savedUser) {
            const membershipData = JSON.parse(savedUser);
            transformedUser = {
              ...transformedUser,
              isVipMember: membershipData.isVipMember || false,
              membershipPlan: membershipData.membershipPlan,
              membershipPrice: membershipData.membershipPrice,
              membershipExpiry: membershipData.membershipExpiry ? new Date(membershipData.membershipExpiry) : undefined,
              trialEnd: membershipData.trialEnd ? new Date(membershipData.trialEnd) : undefined,
              credits: membershipData.credits || 0
            };
          }
          
          setUser(transformedUser);
        }
      } catch (err) {
        
        // Проверяем тип ошибки для лучшей обработки
        if (err instanceof Error && err.message.includes('Failed to fetch')) {
          setError('Backend connection failed. Some features may be limited.');
        } else {
          setError('Authentication failed');
        }
        
        // Если токен невалиден, очищаем его
        authAPI.signout();
        localStorage.removeItem('user_membership');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const credentials: SigninData = { email, password };
      const response = await authAPI.signin(credentials);
      
      let transformedUser = transformApiUser(response.user);
      
      // Попытаемся восстановить данные о членстве из localStorage
      const savedUser = localStorage.getItem('user_membership');
      if (savedUser) {
        const membershipData = JSON.parse(savedUser);
        if (membershipData.email === email) {
          transformedUser = {
            ...transformedUser,
            isVipMember: membershipData.isVipMember || false,
            membershipPlan: membershipData.membershipPlan,
            membershipPrice: membershipData.membershipPrice,
            membershipExpiry: membershipData.membershipExpiry ? new Date(membershipData.membershipExpiry) : undefined,
            trialEnd: membershipData.trialEnd ? new Date(membershipData.trialEnd) : undefined,
            credits: membershipData.credits || 0
          };
        }
      }
      
      setUser(transformedUser);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      setLoading(false);
      return false;
    }
  };

  const register = async (userData: { email: string; password: string; firstName: string; lastName: string; }): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const signupData: SignupData = {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName
      };
      
      const response = await authAPI.signup(signupData);
      const transformedUser = transformApiUser(response.user);
      
      setUser(transformedUser);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    authAPI.signout();
    localStorage.removeItem('user_membership');
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
        membershipExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 дней
        credits: user.credits + 100 // Добавляем кредиты при подписке
      };
      setUser(updatedUser);
      // Сохраняем данные о членстве в localStorage
      localStorage.setItem('user_membership', JSON.stringify({
        email: user.email,
        isVipMember: updatedUser.isVipMember,
        membershipPlan: updatedUser.membershipPlan,
        membershipPrice: updatedUser.membershipPrice,
        membershipExpiry: updatedUser.membershipExpiry,
        trialEnd: updatedUser.trialEnd,
        credits: updatedUser.credits
      }));
    }
  };

  const startTrial = (plan: string, price: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        membershipPlan: plan,
        membershipPrice: price,
        isVipMember: true,
        trialEnd: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 дня триала
        membershipExpiry: new Date(Date.now() + 33 * 24 * 60 * 60 * 1000), // Триал + 30 дней
        credits: user.credits + 50 // Добавляем кредиты за триал
      };
      setUser(updatedUser);
      // Сохраняем данные о членстве в localStorage
      localStorage.setItem('user_membership', JSON.stringify({
        email: user.email,
        isVipMember: updatedUser.isVipMember,
        membershipPlan: updatedUser.membershipPlan,
        membershipPrice: updatedUser.membershipPrice,
        membershipExpiry: updatedUser.membershipExpiry,
        trialEnd: updatedUser.trialEnd,
        credits: updatedUser.credits
      }));
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