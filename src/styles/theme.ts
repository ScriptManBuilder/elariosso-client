export interface Theme {
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    background: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    error: string;
    warning: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const defaultTheme: Theme = {
  colors: {
    primary: '#667eea',
    primaryDark: '#5a67d8',
    secondary: '#764ba2',
    background: '#ffffff',
    cardBackground: 'rgba(255, 255, 255, 0.9)',
    text: '#2d3748',
    textSecondary: '#718096',
    border: 'rgba(255, 255, 255, 0.2)',
    success: '#48bb78',
    error: '#f56565',
    warning: '#ed8936',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
};