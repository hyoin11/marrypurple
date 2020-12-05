import React from 'react';
import '../../../lib/styles/admin/adminGram.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import { IoMdArrowRoundBack } from 'react-icons/io'

const AdminGramRead = ({ gram, onClickHide, onClickShow, clickBack }) => {
    return (
        <>
            {gram && (
                <>
                    <Helmet>
                        <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
                    </Helmet>
                    <h3><i className="fa fa-angle-right"></i> 메리퍼플그램</h3>
                    <div className="read_container">
                        <p><span>닉네임</span> {gram.User.user_nick}</p>
                        <p><span>내용</span> {gram.content}</p>
                        <p><span>좋아요 수</span> {gram.likeCount}</p>
                        <p><span>게시 날짜</span> {gram.writeDate}</p>
                        <p><span>숨김 여부</span> 
                            {gram.showInsta === false && (
                                <>비공개</>
                            )}
                            {gram.showInsta === true && (
                                <>공개</>
                            )}
                        </p>
                        <p><img src={gram.InstaImage} alt="메리퍼플그램 사진"/></p>
                        <p><button onClick={onClickHide}>게시글 숨기기</button> <button onClick={onClickShow}>게시글 보이기</button></p>
                    </div>
                    <IoMdArrowRoundBack onClick={clickBack}/>
                </>
            )}
        </>
    )
}

export default AdminGramRead;