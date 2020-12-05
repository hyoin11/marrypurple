import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as paymentAPI from '../lib/api/payment';
import { takeLatest } from 'redux-saga/effects';

const [
    PAYMENT,
    PAYMENT_SUCCESS,
    PAYMENT_FAILURE
] = createRequestActionTypes('payment/PAYMENT');    // 결제 업데이트

export const paymentU = createAction(PAYMENT, premium => premium);

const paymentUpdateSaga = createRequestSaga(PAYMENT, paymentAPI.paymentUpdate);
export function* paymentSaga(){
    yield takeLatest(PAYMENT, paymentUpdateSaga);
}

const initialState = {
    premium: '',
    error: null
}

const payment = handleActions(
    {
        [PAYMENT]: state => ({
            ...state,
            error: null
        }),
        [PAYMENT_SUCCESS]: (state, { payload: payment }) => ({
            ...state,
            error: null,
            payment
        }),
        [PAYMENT_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error: error
        }),
    },
    initialState
)

export default payment;