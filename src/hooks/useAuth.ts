export const useAuth = () => {
  return !!localStorage.getItem('isAuth');
};
