import api from '../config/api';

export default {
  getUser: body => api.get('/users', body),
  updateUser: (id, body) => api.put(`/users/${id}`, body)
};
