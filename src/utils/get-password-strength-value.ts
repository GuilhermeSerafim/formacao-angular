import zxcvbn from 'zxcvbn';

export const getPasswordStrengthValue = (password: string): number => {
  if (!password) return 0;
  const result = zxcvbn(password);
  return result.score <= 1 ? 30 : result.score <= 3 ? 60 : 100;
};
