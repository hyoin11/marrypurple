import client from './client';

export const userList = () => client.get('/api/worldcup');
export const winner = user_id => client.get(`/api/worldcup/winner/${user_id}`);