import client from "./client";

export const findOne = ({styles}) => client.post("/api/find",{styles});