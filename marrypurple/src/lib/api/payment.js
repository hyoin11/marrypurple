import client from './client';

export const paymentUpdate = premium => client.patch('/api/payment/', premium);