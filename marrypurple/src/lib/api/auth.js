import client from "./client";

export const login = ({ user_email, user_pw }) =>
  client.post("/api/auth/login", { user_email, user_pw });

export const register = ({ user_email, user_pw,user_gender,user_age,user_nick,profile_pic }) =>
  client.post("/api/auth/register", { user_email, user_pw,user_gender,user_age,user_nick,profile_pic });

export const check = () => client.get("/api/auth/check");

export const logout = () => client.post("/api/auth/logout"); //logout api서버 호출

export const updateProfile = ({_id,brief_intro,address,school,personality,fav_song,fav_movie,fav_food,profile_pic}) => client.patch("/api/auth/profile",{_id,brief_intro,address,school,personality,fav_song,fav_movie,fav_food,profile_pic}) 

export const readProfile = () => client.get('/api/auth/profile');

export const findpw = ({user_email})=> client.post("/api/auth/findpw",{user_email});

export const changepw = ({user_pw}) => client.patch('/api/auth/changepw',{user_pw});

export const sendmail =() => client.post("/api/auth/mailOk");

