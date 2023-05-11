export const selectUser = (state) => ({
  username: state.auth.username,
  email: state.auth.email,
  id: state.auth.id,
  avatar: state.auth.avatar,
});
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectIsLoading = (state) => state.auth.isLoading;