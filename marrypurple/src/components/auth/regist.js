import React from 'react';
import { Link } from 'react-router-dom';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../lib/styles/regist.scss'
import rLogo from '../../lib/img/rLogo.png';
import { check } from '../../lib/api/auth';
import $ from 'jquery';
import emailjs from 'emailjs-com';

const Register = ({type,form,onSubmit,error,onChange,fileSelectHandler}) => {
    console.log(form)
    let number = Math.floor(Math.random() * 1000000)+100000; 
    if(number>1000000){                                      
       number = number - 100000;                             
    }
    function mailChk(){
        
        if(number==document.getElementById("inNUm").value)
        {alert("인증되었습니다.")

    }
        else if(number != document.getElementById("inNUm").value){
            alert("인증번호를 올바르게 입력하세요!")

        }

    };

    // function onMail(){
    //     alert("메일 전송완료!")
    // }

    console.log($('.reNum').val());
    


    function sendEmail(e){
        e.preventDefault();

        // var templateParams = { name: e.target.user_email.value, number:""}; emailjs.send('wookoko', 'template_yooxomy', templateParams) .then(function(response) { console.log('SUCCESS!', response.status, response.text); }, function(error) { console.log('FAILED...', error); });
    // code fragment 
    var data = { 
    service_id: 'wookoko',
    template_id: 'template_yooxomy',
    user_id: 'user_xcIXIiBioOn5nB5s5Icpw',
    template_params: { 
        'user_email': form.user_email,
        'contact_number': number 
    } 
}; 

$.ajax('https://api.emailjs.com/api/v1.0/email/send', { 
    type: 'POST', 
    data: JSON.stringify(data), 
    contentType: 'application/json' 
}).done(function() { 
    alert('메일을 보냈습니다!'); 
}).fail(function(error) { 
    alert('Oops... ' + JSON.stringify(error));
});

}
    //     emailjs.sendForm('wookoko','template_yooxomy', e.target,'user_xcIXIiBioOn5nB5s5Icpw').then((result)=>{
    //         console.log(result.text);
    //     },(error)=>{
    //         console.log(error.text);
    //     });
    // }
    return(
        <div id="wrapM">
    {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
    <script type="text/javascript">
        (function() {
            // https://dashboard.emailjs.com/admin/integration
            emailjs.init('user_xcIXIiBioOn5nB5s5Icpw')
        })();
    </script>
    <script type="text/javascript">
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('wookoko', 'template_yooxomy', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            })
        }
    </script> */}
        <div id="container">
            <div id="Rheader">
                    <a><Link to="/" className="rLogo"><img src={rLogo} alt="회원가입로고"/></Link></a>
            </div>
            <div className="rContainer">
                <div className="regiT">
                    <h1>계정 만들기</h1>
                </div>
        {/* <Router> */}
            <form onSubmit={onSubmit} method="post" action="/api/auth" enctype="multipart/form-data">
    
                <div className="regiId">
                    <input type="hidden" name="contact_number" value={number}></input>
                    <p><span className="idText">아이디</span></p>
                    <div>
                        <div className="inputId">
                            <input  
                                className="flexS" 
                                type="email" 
                                name="user_email"  
                                placeholder="이메일 주소(아이디)" 
                                value={form.user_email}
                                onChange={onChange}
                                />
                        </div>
                    {/* <Link to="/mailOk"> */}
                        <input 
                            className="getE" 
                            type="submit" 
                            name="contact-form" 
                            id="contact-form"
                            value="인증 받기"
                            onClick={sendEmail}
                            // onClick={onMail}
                            />
                    {/* </Link> */}
                    </div>
                </div> 

                <div className="regiId">
                    <div className="inputId">
                        <input className="reNum" id="inNUm" type="text" name="chkNum" placeholder="인증번호"/>
                    </div>
                    <input className="getE" type="button" name="Check" onClick={mailChk} value="인증"/>
                </div>
                <div className="regiPw">
                    <p><span>비밀번호</span></p>
                    <div className="inputId inputPw">
                        <input 
                            type="password" 
                            name="user_pw" 
                            placeholder="비밀번호" 
                            onChange={onChange}
                            value={form.user_pw}
                            />
                    </div>
                </div>
                <div className="regiId regiGender">
                    <div className="inputG radio_area">
                        <p>성별</p>
                        <input 
                        className="css-radio" 
                        type="radio" 
                        name="user_gender" 
                        onChange={onChange}
                        value={"male"}
                        id="mmm_lbl"/><label for="mmm_lbl">남</label>
                        <input 
                        className="css-radio" 
                        value={"female"} 
                        type="radio" 
                        name="user_gender" 
                        onChange={onChange}  
                        id="www_lbl" /><label for="www_lbl">여</label>
                    </div>
                    <div className="inputG">
                        <p>나이</p>
                        <input className="getAge" 
                        value={form.user_age} 
                        type="text"
                        name="user_age" 
                        onChange={onChange}  placeholder="나이"/>
                    </div>
                </div>
                <div className="regiPro">
                    <div className="inputPro">
                    <p className="picName"><span>프로필 사진</span></p>
                        <input type="file" 
                        name="profile_pic" 
                        onChange={fileSelectHandler}
                        />
                    </div>
                    <div className="inputPro inputPro2"> 
                        <p><span>닉네임</span></p>
                        <input 
                        className="getNick" 
                        value={form.user_nick} 
                        type="text"
                        name="user_nick" 
                        onChange={onChange} placeholder="닉네임"/>
                    </div>
                </div>

                <div className="regiId regiGo">
                    
                    {/* <input type="submit" name="regi" value="가입하기"/> */}
                    <button>가입하기</button>
                </div>
            </form>
        {/* </Router> */}
                <div className="regiId regiBack">
                    <p><a> <Link to="/login">이미 가입하셨다면? 로그인하세요.</Link></a></p>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Register;