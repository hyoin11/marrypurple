import React from 'react';
import { withRouter } from "react-router-dom";
import TelepathyMakeQuizFin from '../../components/telepathy/TelepathyMakeQuizFin'

const TelepathyMakeQuizFinContainer = ({location}) => {
    const collectmun = location.mun;
    const collectans = location.ans;
    return(
        <TelepathyMakeQuizFin mun={collectmun} ans={collectans}/>
    )
}

export default withRouter(TelepathyMakeQuizFinContainer);