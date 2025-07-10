// Security utility functions

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  // Remove potentially dangerous HTML/script tags
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/data:text\/html/gi, '')
    .trim();
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  const minLength = process.env.REACT_APP_PASSWORD_MIN_LENGTH || 8;
  
  if (password.length < minLength) {
    return { valid: false, message: `Password must be at least ${minLength} characters long` };
  }
  
  // Check for at least one uppercase letter, one lowercase letter, and one number
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  
  if (!hasUpperCase || !hasLowerCase || !hasNumbers) {
    return { 
      valid: false, 
      message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number' 
    };
  }
  
  return { valid: true, message: '' };
};

export const generateCSRFToken = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const validateCSRFToken = (token, storedToken) => {
  return token === storedToken;
};

export const isAuthenticated = (authUser) => {
  return authUser !== null && authUser !== undefined;
};

export const hasRole = (authUser, requiredRole) => {
  if (!isAuthenticated(authUser)) return false;
  
  // This would need to be implemented based on your user role system
  // For now, we'll assume admin users have a specific email domain or UID
  return authUser.email && authUser.email.includes('admin');
};

export const logSecurityEvent = (event, details) => {
  // In production, this should send to a security monitoring service
  console.warn('Security Event:', event, details);
  
  // You could integrate with services like:
  // - Firebase Analytics
  // - Sentry
  // - Custom security monitoring
};