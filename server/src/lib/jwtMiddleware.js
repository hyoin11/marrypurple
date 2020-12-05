import jwt from 'jsonwebtoken';
import User from '../models/user';

//토큰 검증
const jwtMiddleware = async (ctx, next)=>{
    const token = ctx.cookies.get('access_token');
    if(!token) return next();
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        ctx.state.user = {
            _id: decoded._id,
            user_email : decoded.user_email 
        }
        const now = Math.floor(Date.now()/ 1000);
        if(decoded.exp - now < 60 * 60 * 24 * 3.5 ){ //남은시간이 저거보다 작으면
            const user = await User.findById(decoded._id);
            const token = user.generateToken();
            ctx.cookies.set('access_token',token,{
                maxAge: 1000 * 60 * 60 * 24 * 7, //7일
                httpOnly: true //http를통한 통신에서만 쿠키사용
            })
        }

        console.log(decoded);
        return next();
    }catch(e){
        return next();
    }
}

export default jwtMiddleware;