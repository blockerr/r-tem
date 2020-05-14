import {axios_noAuth} from './axios';
var jwtDecode = require('jwt-decode');

class Auth {
  constructor() {
    this.loggedIn = false;
    this.isAdmin = false;
    this.id = null;
    this.email = null;
    this.username = null;
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = this.decodeUserFromToken(token);
      this.setCurrentUser(decoded)
    }
  }

  login(credencials) {
    axios_noAuth.post('/admin/signin', credencials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        const decoded = this.decodeUserFromToken(res.data.token);
        this.setCurrentUser(decoded);
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }

  setCurrentUser(decoded) {
    this.loggedIn = true;
    this.username = decoded.username;
    this.id = decoded.id;
    this.email = decoded.email;
    decoded.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
  }

  decodeUserFromToken(token) {
    return jwtDecode(token);
  }

  isAuthenticated() {
    return this.loggedIn
  }
}

export default new Auth()