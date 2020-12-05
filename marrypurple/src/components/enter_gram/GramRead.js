import React from 'react';
import '../../lib/styles/gram.scss';
import $ from 'jquery';
import img1 from '../../lib/images/icon/004980c2c35d4fa37d9635ed7f159c3c.png';
import img2 from '../../lib/images/icon/f84abf6d0bd53bf97dbb1011aa640499.png';
import img3 from '../../lib/images/icon/49f19f63a24305a4f1dedfd8481c01e2.png';
import img4 from '../../lib/images/icon/8c6f9b49103dd67cf3bfd50f561b46d6.png';
import { BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Error from '../common/Error';

const GramWrite = ({ user, gram, listLikeGram, commentSubmit, deleteClick, heartClick , error, loading}) => {
    let gram1 = {};
    let heartClass = '';
    if(gram){
        gram1 = gram;
        for(let i=0; i<gram1.likeUser.length; i++){
            if(gram1.likeUser[i] == user._id){
                heartClass = 'on';
            }
        }
    }

    const clickBack = () => {
        window.history.back();
    }

    const clickPopup = e => {
        let media = window.matchMedia('( max-width: 768px )');
        if(media.matches === true){
            let $href = $(e.target.parentNode).attr('href');

            let $el = $($href);        //레이어의 id를 $el 변수에 저장
            let isDim = $el.prev().hasClass('dimBg2');   //dimmed 레이어를 감지하기 위한 boolean 변수

            isDim ? $('.dim-layer2').fadeIn() : $el.fadeIn();

            let $elWidth = ~~($el.outerWidth()),
                $elHeight = ~~($el.outerHeight()),
                docWidth = $(document).width(),
                docHeight = $(document).height();

            // 화면의 중앙에 레이어를 띄운다.
            if ($elHeight < docHeight || $elWidth < docWidth) {
                $el.css({
                    marginTop: 0,
                    marginLeft: 0
                })
            } else {
                $el.css({top: 0, left: 0});
            }

            $el.find('.popup_close2').on('click', function(){
                isDim ? $('.dim-layer2').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
                return false;
            });

            $('.layer .dimBg2').on('click', function(){
                $('.dim-layer2').fadeOut();
                return false;
            });
        }else{
            let $href = $(e.target.parentNode).attr('href');

            let $el = $($href);        //레이어의 id를 $el 변수에 저장
            let isDim = $el.prev().hasClass('dimBg2');   //dimmed 레이어를 감지하기 위한 boolean 변수

            isDim ? $('.dim-layer2').fadeIn() : $el.fadeIn();

            let $elWidth = ~~($el.outerWidth()),
                $elHeight = ~~($el.outerHeight()),
                docWidth = $(document).width(),
                docHeight = $(document).height();

            // 화면의 중앙에 레이어를 띄운다.
            if ($elHeight < docHeight || $elWidth < docWidth) {
                $el.css({
                    marginTop: -$elHeight /2,
                    marginLeft: -$elWidth/2
                })
            } else {
                $el.css({top: 0, left: 0});
            }

            $el.find('.popup_close2').on('click', function(){
                isDim ? $('.dim-layer2').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
                return false;
            });

            $('.layer .dimBg2').on('click',function(){
                $('.dim-layer2').fadeOut();
                return false;
            });
        }
    }

    const clickA = e => {
        let $current = $(e.target.parentNode);
        $current.toggleClass('on');
        $current.parent().siblings().children('a').removeClass('on');
        console.log('1234',$current);
        if($current.hasClass('on')){
            $('.pop-layer2 button').css({
                'background': 'linear-gradient( to left, #FFD7DD, #9E7FFE )'
            }).text('신고').on('click', function(){
                alert('신고가 접수되었습니다');
            });
        }else{
            $('.pop-layer2 button').css({
                'background': '#dadfe6'
            }).text('취소').on('click', function(){
                $('.dim-layer2').fadeOut();
            });
        }
    }

    if(error){
        return <Error/>
    }
    return(
        <>
            {!loading && gram && user && listLikeGram && (
                <>
                    <div className="gramP_1">
                        <div className="gramP_1_back" onClick={clickBack}></div><div class="gramP_1_myPho">{<img src={gram.User.profile_pic} alt="gram user profile_pic"/>}</div><span className="gramP_id" id="gramP_1_id">{gram.User.user_nick}</span>
                        {listLikeGram.map(listLikeGram => listLikeGram._id === gram._id && (
                            <div id="gramP_1_hot">HOT</div>
                        ))}
                        {gram.User._id === user._id ? (
                            <div className="gramP_1_trash" onClick={deleteClick}><BiTrash/></div>
                        ) : (
                            <div href={`#${gram._id}layer2`} className="declare_popup" onClick={clickPopup}><div id="gramP_1_decla"></div></div>
                        )}
                    </div>
                    <div className="gramP_2">
                        <div id="gramP_2_photo"><img src={gram.InstaImage} alt="instaImage"/></div>
                    </div>
                    <div className="gramP_3">
                        <div id="gramP_3_heart" onClick={heartClick} className={heartClass}></div>
                        <p><span id="gramP_3_count">{gram.likeCount}</span>명이 좋아합니다.</p>
            <p><span className="gramP_id" id="gramP_3_id">{gram.User.user_nick}</span> <span id="gramP_3_content">{gram.content}</span></p>
                    </div>
                    <div className="gramP_4">
                        {gram.comment.map(comment => (
                            <p><span className="gramP_reID" id="gramP_4_reID">{comment.nickName}</span> {comment.text}</p>
                        ))}
                    </div>
                    <div className="gramP_5">
                        <form method="patch" onSubmit={commentSubmit}>
                            <input type="hidden" name="nickName" value={user.user_nick}/><div className="gramP_id" id="gramP_5_id">{user.user_nick}</div><input type="text" name="comment"/> <input type="submit" value="게시" className="gramP_5_button"/>
                        </form>
                        
                    </div>
                    <div className="dim-layer2">
                        <div className="dimBg2"></div>
                        <div id={`${gram._id}layer2`} className="pop-layer2">
                            <div className="pop-container2">
                                <div>
                                <h2>회원 신고</h2>
                                <p><span className="messageP_id">{gram.User.user_nick}</span>님께는 알리지 않습니다.</p>
                                </div>
                                <hr/>
                                <div className="pop_reason">
                                    <ul>
                                        <li>
                                            <Link onClick={clickA}>
                                                <div><img src={img1} alt="부적절한 사진" /></div>
                                                <div>부적절한 사진</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={clickA}>
                                                <div><img src={img2} alt="스팸으로 의심됨"/></div>
                                                <div>스팸으로 의심됨</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={clickA}>
                                                <div><img src={img3} alt="부적절한 메시지"/></div>
                                                <div>부적절한 메시지</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={clickA}>
                                                <div><img src={img4} alt="기타"/></div>
                                                <div>기타</div>
                                            </Link>
                                        </li>
                                    </ul>
                                    <button className="popup_close2"><span>취소</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            
        </>
    )
}

export default GramWrite;