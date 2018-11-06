import api from '../config/api';

export default {
  getUsers: (email, password) => api.get('/users', { email, password })
};
