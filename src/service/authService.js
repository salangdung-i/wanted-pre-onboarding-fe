class AuthService {
  login(user) {
    if (localStorage.getItem('username') === null) {
      localStorage.setItem('username', user.name);
      localStorage.setItem('password', user.password);
      return true;
    } else if (
      localStorage.getItem('username') === user.name &&
      localStorage.getItem('password') === user.password
    ) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    return false;
  }
}

export default AuthService;
