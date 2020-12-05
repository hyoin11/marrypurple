import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import PaymentContainer from '../containers/payment/PaymentContainer';

const PaymentPage = () => {
    return (
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <div id="content10">
                    <PaymentContainer/>
                </div>
            </div>
        </>
    )
}

export default PaymentPage;