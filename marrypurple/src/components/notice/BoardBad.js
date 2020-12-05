import React, { useEffect } from 'react';
// import styled from 'styled-components';
import '../../lib/styles/boardBad.scss';
import $ from 'jquery';
// import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { getPhoto, unloadPhoto } from '../../modules/photos';

const BoardBad = ({ badList }) => {
    // console.log('불량회원',badList);
    const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getPhoto());
            return () => {
                dispatch(unloadPhoto());
            };
        }, [dispatch]);

    const script = () => {
        $('#contentBox .gramB_2 dt a').on('click', function(){
            $(this).parent().toggleClass('on').next().toggleClass('on');
            $(this).parent().prevAll('dt').removeClass('on');
            $(this).parent().nextAll('dt').removeClass('on');
            $(this).parent().next().prevAll('dd').removeClass('on');
            $(this).parent().next().nextAll('dd').removeClass('on');
        });
    }

    script();

    return (
        <>
            <div className="gramB_1">
                <h2>불량회원</h2>
            </div>
            <div className="gramB_2">
                <dl className="gramB_2_list">
                    {badList && (
                        <dl>
                            {badList.map(post => (
                                <>
                                    <dt>
                                    <a><div className="gramB_2_wrap"><p><span className="gramB_2_id">{post.User.user_nick}</span> - <span className="gramB_2_reason">{post.reason}</span></p><div className="gramB_2_icon"></div></div></a>
                                    </dt>
                                    <dd>
                                        <div className="gramB_2_detail">
                                            <div className="gramB_2_datail_photo"><img src={post.User.profile_pic}/></div>
                                            <p className="gramB_2_detail_content">
                                                {post.reason === "부적절한 메시지" && (<span>상대방에게 부적절한 메시지를 전송하여</span>)}
                                                {post.reason === "스팸으로 의심됨" && (<span>스팸으로 의심되어</span>)}
                                                {post.reason === "부적절한 사진" && (<span>부적절한 사진을 사용하여</span>)}신고당하였습니다.<br/>이 회원을 보게되면 운영진에게 신고하여주세요.</p>
                                        </div>
                                    </dd>
                                </>
                            ))}
                        </dl>
                    )}
                </dl>
            </div>
        </>
    )
}

export default BoardBad;