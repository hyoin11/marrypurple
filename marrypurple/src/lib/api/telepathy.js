import client from "./client";

export const telepathyMun = ({mun, ans}) => client.patch("/api/telepathy",{mun, ans});
export const telepathyAns = () => client.get("/api/telepathy/ans");
export const teleFin = ({user_id}) => client.patch("api/telepathy/ans3",{user_id})