import React from 'react';
import '../../../lib/styles/admin/adminBad.scss';

const AdminBadWrite = ({ onSubmit, onClick }) => {
    return (
        <>
            <h3><i className="fa fa-angle-right"></i> 불량회원</h3>
            <form method="post" className="admin_bad_form" onSubmit={onSubmit}>
                <div>회원 고유 ID <input type="text" name="user_id"/></div>
                <div>이유 
                    <select name="reason">
                        <option value="#">선택하세요</option>
                        <option value="부적절한 사진">부적절한 사진</option>
                        <option value="스팸으로 의심됨">스팸으로 의심됨</option>
                        <option value="부적절한 메시지">부적절한 메시지</option>
                    </select>
                </div>
                <div><input type="submit" value="등록"/> <input type="button" value="취소" onClick={onClick}/></div>
            </form>
        </>
    )
}

export default AdminBadWrite;
