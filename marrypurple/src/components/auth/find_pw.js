import React from 'react';
import { Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../lib/styles/regist.scss';
import rLogo from '../../lib/img/rLogo.png';

const FindPw = ({type,form,onChange,onSubmit,error,sendmailer}) => {


    let number = Math.floor(Math.random() * 10000)+1000; 
    if(number>10000){                                      
       number = number - 1000;                            
    }
    // function setCookie(number, user_number,exdays){
    //     var user_number = Math.floor(Math.random() * 10000)+1000;
    //         if(number>10000){                                      
    //             number = number - 1000;                  
    //         }

    //     var exdate = new Date();

    //     exdate.setDate(exdate.getDate()+exdays);
    //     var cookieValue = escape(user_number) +((exdays ==null)?"":";expires="+exdate.toGMTString());
    //     document.cookie = "number" +"=" +cookieValue;

    //     var user_email = form.user_email;
    //     var exdate = new Date();

    //     exdate.setDate(exdate.getDate()+exdays);
    //     var cookieValue = escape(user_email) +((exdays ==null)?"":";expires="+exdate.toGMTString());
    //     document.cookie = "user_email" +"=" +cookieValue;


    // }

    // function mailClick(number2,number) {
    //     let cookieNumber = escape(Math.floor(Math.random() * 10000)+1000);
    //     if(number>10000){                                      
    //        number = number - 1000;                  
    //     }
    //     // let cookieUser_email = escape(form.user_email);
    //     console.log(" number~~~~~~~~" + number);
    //     // document.cookie = user_email + "=" + cookieUser_email;

    //     document.cookie = number2 + "=" + cookieNumber;
    //     console.log ("user_email$$$$$$$$$$$$$$$$$$" +form.user_email)
        
    // }

    return(
    <>
        <div id="wrapM">
        <div id="container">
            <div id="Rheader">
                    <a><Link to="/" class="rLogo"><img src={rLogo} alt="회원가입로고"/></Link></a>
            </div>
            <div class="rContainer">
                <div class="regiT findPw">
                    <h1>비밀번호 찾기</h1>
                </div>
            <form onSubmit={onSubmit}>
                <div class="regiId">
                    <p><span class="idText">아이디</span></p>
                    <div>
                        <div class="inputId">
                            <input 
                                class="flexS" 
                                type="text" 
                                name="user_email"
                                placeholder="이메일 주소(아이디)"
                                onChange={onChange}
                                value={form.user_email}
                            />
                            <input type="hidden" name="number" onChange={onChange} value={number}/>
                        </div>
                        <Link to="/mailOk"><input class="getE" type="button" name="idCheck" value="인증 받기"/>                            
                        <input  
                                class="flexS" 
                                type="hidden" 
                                name="user_email"
                                placeholder="이메일 주소(아이디)"
                                onChange={onChange}
                                value={form.user_email}
                            /></Link>
                    </div>
                </div> 
                <div class="regiId">
                    <div class="inputId">
                        <input class="reNum" id="chkId" type="text" name="chkNum" placeholder="인증번호"/>
                    </div>
                    <input class="getE" type="button" name="Check"value="인증"/>
                </div>
                <div className="errorMsg1">{error}</div>
                <div class="reBtn">
                    <a><input class="rePw" type="submit" name="rePw1" value="변경하기"/></a>
                </div>
            </form>
            </div>
        </div>
    </div>
    </>

    )
}
export default FindPw;
