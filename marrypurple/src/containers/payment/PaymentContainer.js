import React from 'react';
import Payment from '../../components/payment/Payment';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { paymentU } from '../../modules/payment'
import $ from 'jquery';

const PaymentContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector(({ user, payment, loading }) => ({
        user: user.user,
        loading: loading['payment/PAYMENT']
    }));

    const onSubmit = () => {
        let premium = '';
        let pay = $("input[name='pay']:checked").val();
        switch(pay){
            case '1개월':
                premium = '1month';
                break;
            case '6개월':
                premium = '6months';
                break;
            case '1년':
                premium = '1year';
                break;
        }
        let result = window.confirm( pay + ' 결제하시겠습니까?');

        if(result){
            console.log(premium);
            dispatch(paymentU({
                premium
            }));
            alert('결제가 완료되었습니다.');
            // history.push('/match');
        }else{
            history.push('/profile');
        }
        
    }

    return (
        <Payment onSubmit={onSubmit} history={history} loading={loading} error={error}/>
    )
}

export default withRouter(PaymentContainer);