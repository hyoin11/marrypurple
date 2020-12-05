import React from 'react';
import haert from '../../lib/images/images/heart3.png';

const TelepathyContainer = () => {
    return(
        <div style={{ width: '100%', height:'100%', backgroundColor:"#FFD7DD"}}>
            <div style={{textAlign:'center', paddingTop:'150px'}}><img src={haert} style={{width:'200px'}} /></div>
            <div style={{ textAlign:'center', color:'#ff7878', fontWeight:'bold', fontSize:'20px', marginTop:'30px' }}>매치되었습니다^^ <br/>대화를 걸어보세요</div>
        </div>
        
    )
}

export default TelepathyContainer;