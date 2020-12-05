import client from "./client";

export const user = () => client.get("/api/admin/user");

export const userNick = ({ text }) => client.post("api/admin/search/nick", { text });
export const userEmail = ({ text }) => client.post("api/admin/search/email", { text });
export const userGender = ({ text }) => client.post("api/admin/search/gender", { text });