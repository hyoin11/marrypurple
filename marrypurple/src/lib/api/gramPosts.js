import client from './client';

export const gramWrite = ({ InstaImage, content }) => client.post('/api/posts', { InstaImage, content });

export const gramRead = gram_id => client.get(`/api/posts/${gram_id}`);

export const gramList = () => client.get('/api/posts');

export const gramLiktList = () => client.get('/api/posts/like');

export const gramListAll = () => client.get('/api/posts/all');

export const gramDelete = gram_id => client.delete(`/api/posts/${gram_id}`);

export const gramLikeUpdate = ({ gram_id, heart }) => client.patch(`/api/posts/like/${gram_id}/${heart}`);

export const gramCommentUpdate = ({ _id, nickName, text }) => client.patch(`/api/posts/comment`, { _id, nickName, text });

export const gramHideUpdate = gram_id => client.patch(`/api/posts/hide/${gram_id}`);

export const gramShowUpdate = gram_id => client.patch(`/api/posts/show/${gram_id}`);