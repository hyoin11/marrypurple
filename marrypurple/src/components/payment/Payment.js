import React from 'react';
import '../../lib/styles/payment.scss';
import $ from 'jquery';
import Error from '../common/Error';

const Payment = ({ onSubmit, loading, error, history }) => {
    
    const cancelClick = () => {
        history.push('/profile');
    }

    const radioClick = e => {
        $('.go_pay form div').removeClass('test_css');
        $(e.target).parent().parent().addClass('test_css');
        // console.log($("input[name='pay']:checked").val());
    }

    if(error){
        return <Error/>
    }
    return (
        <>
            {!loading && (
                <div id="contentBox1">
                    <div className="product_list">
                        <div id="service">유로 서비스 포함 내역</div>
                        <div className="product_list_detail">
                            <div className="icons" id="icon1"><i className="far fa-kiss-wink-heart"></i></div>
                            <div className="producnt_text">
                                <p id="icon1_text">나를 좋아한 사람 보기</p>
                                <p>스와이프 하기 전에 나를 '좋아요'한 회원 보기</p>
                            </div>
                        </div>
                        <div className="product_list_detail">
                            <div className="icons" id="icon2"><i className="fas fa-heart"></i></div>
                            <div className="producnt_text">
                                <p id="icon2_text">무제한 좋아요</p>
                                <p>오른쪽 스와이프를 무제한으로 이용할 수 있습니다.<br/>실컷 스와이프 하세요!</p>
                            </div>
                        </div>
                        <div className="product_list_detail">
                            <div className="icons" id="icon3"><i className="fas fa-comments"></i></div>
                            <div className="producnt_text">
                                <p id="icon3_text">대화하기</p>
                                <p>마음에 드는 상대에게 마음껏 대화를 신청할 수 있습니다.</p>
                            </div>
                        </div>
                        <div className="product_list_detail">
                            <div className="icons" id="icon4"><i class="far fa-grin-hearts"></i></div>
                            <div className="producnt_text">
                                <p id="icon4_text">이상형 찾기</p>
                                <p>이상형에 맞는 상대를 보여줍니다.</p>
                            </div>
                        </div>
                        <div className="product_list_detail">
                            <div className="icons" id="icon5"><i className="fas fa-star"></i></div>
                            <div className="producnt_text">
                                <p id="icon5_text">매일 슈퍼라이크 5개</p>
                                <p>매일 슈퍼라이크 5개를 받고 매치 기회도 3배나 늘릴 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="go_pay">
                        <p id="go_pay_title">Marry Purple 골드 구매</p>
                        <p id="go_pay_title_detail">나를 좋아한 사람 보기!</p>
                        <form onSubmit={onSubmit}>
                            <div className="choose">
                                <label><div className="inputCircle"></div><input type="radio" name="pay" id="1year" value="1년" onClick={radioClick}/> 12개월</label>
                                <p>￦13,000 / 월 60% 할인</p>
                            </div>
                            <div className="choose test_css">
                                <label><div className="inputCircle"></div><input type="radio" name="pay" id="6months" value="6개월" defaultChecked onClick={radioClick}/> 6개월</label>
                                <p>￦19,700 / 월 37% 할인</p>
                            </div>
                            <div className="choose">
                                <label><div className="inputCircle"></div><input type="radio" name="pay" id="1month" value="1개월" onClick={radioClick}/> 1개월</label>
                                <p>￦31,500/월</p>
                            </div>
                            <p className="buttons" id="pay_button"><input type="submit" value="결제"/></p>
                        </form>
                        <p className="buttons"><input type="button" value="취소" onClick={cancelClick}/></p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Payment;