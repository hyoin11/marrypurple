import React from 'react';
import '../../lib/styles/nouser.scss'

const NoUser = () => {
    return(
        <>
            <div className="loading_gif" id="load_gif_file"><img src="http://localhost:4000/ATB3o.gif"/></div>
            <div className="loading_gif" id="getPage_bul">페이지를 불러오고 있습니다</div>
            <div className="loading_gif" id="getPage_bul_small">잠시만 기다려 주세요</div>
        </>
    )
}

export default NoUser;