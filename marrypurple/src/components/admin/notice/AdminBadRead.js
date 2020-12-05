import React from 'react';
import '../../../lib/styles/admin/adminBad.scss';
import $ from 'jquery';

const AdminBadRead = ({ onSubmit, onClickDel, onClick, badPost }) => {
    let badPost2 = {};
    if(badPost){
        badPost2 = badPost;
    }

    let badReason = badPost2.reason;
    for(let i=0; i<$('select option').length; i++){
        if(badReason === $('select option')[i].value){
            $('select option')[i].setAttribute('selected', true);
        }
    }

    return (
        <>
            {badPost && (
                <>
                    <h3><i className="fa fa-angle-right"></i> 불량회원</h3>
                    <form method="post" className="admin_bad_read_form" onSubmit={onSubmit}>
                        <div>회원 고유 ID <span>{badPost.User._id}</span></div>
                        <div>회원 닉네임 <span>{badPost.User.user_nick}</span></div>
                        <div>회원 프로필 <div><img src={badPost.User.profile_pic} alt="회원 프로필"/></div></div>
                        <div>이유 
                            <select name="reason">
                                <option defaultValue="#">선택하세요</option>
                                <option defaultValue="부적절한 사진">부적절한 사진</option>
                                <option defaultValue="스팸으로 의심됨" selected>스팸으로 의심됨</option>
                                <option defaultValue="부적절한 메시지">부적절한 메시지</option>
                            </select>
                        </div>
                        <div><input type="submit" value="수정"/> <input type="button" value="삭제" onClick={onClickDel}/> <input type="button" value="취소" onClick={onClick}/></div>
                    </form>
                </>
            )}
            
        </>
    )
}

export default AdminBadRead;
