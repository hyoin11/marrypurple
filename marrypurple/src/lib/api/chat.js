import client from "./client";

export const chatUser = () => client.get("/api/chat");
export const getChatUser = id => client.post(`/api/chat/${id}`)
export const getMsg = ({sender, recepient}) => client.patch('/api/chat/send',{sender, recepient})