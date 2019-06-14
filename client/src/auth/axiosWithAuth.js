import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('jwt');
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
};
