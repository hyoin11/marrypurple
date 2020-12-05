import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../matching/pieces/ProfilePic'
import '../../lib/styles/matchProfile.scss'
import imgA from '../../lib/images/icon/004980c2c35d4fa37d9635ed7f159c3c.png'
import imgB from '../../lib/images/icon/f84abf6d0bd53bf97dbb1011aa640499.png'
import imgC from '../../lib/images/icon/49f19f63a24305a4f1dedfd8481c01e2.png'
import imgD from '../../lib/images/icon/8c6f9b49103dd67cf3bfd50f561b46d6.png'

const ShowProfile = ({user_data, my_email, unfoldDiv, onToggle}) => {

    const onClick = () => {
        window.history.back();
    }

    return(
        <>
            <div class="matchP_1">
                <div><div class="back" onClick={onClick}></div></div>
                <p><span id="matchP_1_id">{user_data.user_nick}</span> <span id="matchP_1_age">{user_data.user_age}</span></p>
            </div>
            <div class="matchP_2">
            <ProfilePic pics={user_data.profile_pic} key={user_data._id}/>
            </div>
            <div class="matchP_3">
                <div><div id="matchP_3_gender"></div><p>{user_data.user_gender === 'male' &&('남성')}{user_data.user_gender === 'female' &&('여성')}</p></div>
                <div><div id="matchP_3_place"></div><p>{user_data.address}</p></div>
            </div>
            <div class="matchP_4">
                <p id="matchP_4_content">{user_data.brief_intro}</p>
            </div>
            <div class="matchP_5">
            <Link to={{ pathname:'/chat', data: user_data, myInfo: my_email }} id="send_msg_btn" >메시지 보내기</Link>
                <button href="#layer2" class="declare_popup" onClick={onToggle}>신고</button>
            </div>
            {unfoldDiv.report === true &&(
                <div class="dim-layer">
                    <div class="dimBg"></div>
                    <div id="layer2" class="pop-layer">
                        <div class="pop-container">
                            <div>
                            <h2>회원 신고</h2>
                            <p><span class="messageP_id">apple</span>님께는 알리지 않습니다.</p>
                            </div>
                            <hr/>
                            <div>
                            <ul>
                                <li>
                                <a>
                                    <div><img src={imgA} alt="부적절한 사진"/></div>
                                    <div>부적절한 사진</div>
                                </a>
                                </li>
                                <li>
                                <a>
                                    <div><img src={imgB} alt="스팸으로 의심됨"/></div>
                                    <div>스팸으로 의심됨</div>
                                </a>
                                </li>
                                <li>
                                <a>
                                    <div><img src={imgC} alt="부적절한 메시지"/></div>
                                    <div>부적절한 메시지</div>
                                </a>
                                </li>
                                <li>
                                <a>
                                    <div><img src={imgD} alt="부적절한 메시지"/></div>
                                    <div>기타</div>
                                </a>
                                </li>
                            </ul>
                            <button class="popup_close" onClick={onToggle}><span>취소</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    )
}

export default ShowProfile;