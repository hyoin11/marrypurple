import client from './client';
// import qs from 'qs';

export const badWrite = ({ _id, reason }) => client.post('/api/badBoard', { _id, reason });

export const badRead = bad_id => client.get(`/api/badBoard/${bad_id}`);

export const badList = () => client.get('/api/badBoard');

export const badRemove = bad_id => client.delete(`/api/badBoard/${bad_id}`);

export const badUpdate = ({ bad_id, reason }) => client.patch('/api/badBoard', ({ bad_id, reason }));

export const reportList = () => client.get('/api/badBoard/report');