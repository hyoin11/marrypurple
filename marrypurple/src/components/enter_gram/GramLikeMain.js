import React from 'react';
import '../../lib/styles/gram.scss';
import { Link } from 'react-router-dom';

const GramLikeMain = ({ listLikeGram }) => {
    
    return(
        <>
            <div class="gram_1">
                <Link to="/gram_write"><div class="gram_1_button">게시물 올리기</div></Link>
            </div>

            {listLikeGram && (
                <div className="gram_2">
                    <p>HOT</p>
                    {listLikeGram.map((likeGram, index) => (
                        <Link to={`/gram_post/${likeGram._id}`}>
                            <div className="gram_2_photo" key={index} /*style={{ background: `url(${likeGram.InstaImage})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} */><img src={likeGram.InstaImage}/></div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default GramLikeMain;