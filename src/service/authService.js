class AuthService {
  login(user) {
    if (localStorage.getItem(user.name) === null) {
      localStorage.setItem(user.name, user.password);
      localStorage.setItem('loginUserName', user.name);
      localStorage.setItem('loginUserPasswork', user.password);

      return true;
    } else if (localStorage.getItem(user.name) === user.password) {
      localStorage.setItem('loginUserName', user.name);
      localStorage.setItem('loginUserPasswork', user.password);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('loginUserName');
    localStorage.removeItem('loginUserPasswork');
    return false;
  }
}

export default AuthService;
