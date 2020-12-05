import client from './client';

export const updateGender = match_gender => client.patch('/api/side/wantGender', match_gender);