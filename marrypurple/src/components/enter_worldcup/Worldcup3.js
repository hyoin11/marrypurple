import React from 'react';
import '../../lib/styles/worldcup3.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Error from '../common/Error';
import { ImHeart } from 'react-icons/im'
import { IoMdRefresh } from 'react-icons/io'

const Worldcup3 = ({ winner, error, loading, likeBtn }) => {
    if(error){
        return (
            <Error/>
        )
    }

    return (
        <>
            {!loading && winner && (
                <>
                    <div className="world3_1">
                        <div className="world3_1_header"><div className="Wcup"><div></div></div><span>우승자</span><div className="Wcup"><div></div></div></div>
                    </div>
                    <div className="world3_2">
                        <div className="pictureMain">
                            {/* <div><img src={winner.profile_pic[0]} alt="프로필사진"/></div> */}
                            <div style={{ background: `url(${winner.profile_pic[0]})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}></div>
                        </div>
                        <div className="profile">
                                <h1>{winner.user_nick}<span>{winner.user_age}</span></h1>
                                {winner.address && (
                                    <>
                                        <div className="location"><div></div><span>{winner.address}</span></div>
                                    </>
                                )}
                                {winner.personality && winner.personality != "" && (
                                    <div id="hobbywrap">
                                        {winner.personality.map((personality, index) => (
                                            <div key={index} className="hobby">{personality}</div>
                                        ))}
                                    </div>
                                )}
                                
                        </div>
                        {winner.brief_intro && (
                            <div className="sogae">
                                {winner.brief_intro}
                            </div>
                        )}
                        <div className="likeU">
                            <Link to="/worldcup1" className="likeU_btn" onClick={likeBtn}>
                                <ImHeart/>
                                <div>좋아요</div>
                            </Link>
                            <Link to="/worldcup1" className="likeU_btn">
                                <IoMdRefresh/>
                                <div>다시할래요</div>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Worldcup3;
