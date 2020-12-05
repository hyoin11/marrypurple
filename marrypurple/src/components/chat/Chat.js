import React, {useState, useEffect, useRef} from 'react';
import io from 'socket.io-client'
import '../../lib/styles/chat.scss'
import { withRouter } from 'react-router-dom';
const socket = io.connect('/')

const Chat = ({match, profile_pic, user_nick, user_email, my_email, getMsg}) => {
    let Msgs =[];
    if(getMsg){
        Msgs = getMsg
        // console.log(Msgs)
    }
    const [yourID, setYourID] = useState()
    const [state, setState] = useState({message: '', name: ''});
    const [chat, setChat] = useState([])

    useEffect(()=>{
        socket.on('yourId',id =>{
            setYourID(id)
        })
        socket.on('message', (data) => {
            setChat([...chat, data])
        })
    },[chat])

    const onTextChange = (e) =>{
        setState({...state, [e.target.name]:e.target.value})
    }

    const onMessageSubmit = (e) => {
        e.preventDefault()//계속 새로고침하는것을 막아주는 함수.
        console.log(yourID)
        const {name, message} = state
        const output = {
            id: yourID,
            sender: my_email,
            recepient: user_email,
            data: message
        }
        socket.emit('sendMessage', output)  // 메세지 보내기
        setState({message:'', name})
    }
    function giveMeId(){
        const ddata = ''
        socket.emit('giveMe', ddata)
    }
    giveMeId();
    return(
        <div>
            <div class="message_1">
                {/* <a href="message_profile.html"><div id="message_1_photo"><div style={{ background: `url(${profile_pic[0]})`, 'background-size': '100%', 'border-radius': '50%','backgroundPosition':"center" }}></div></div> */}
                <span><div id="message_1_photo"><img src={profile_pic[0]}/></div>
                <p><span id="message_1_id"></span>{user_nick}님과 매치되었습니다.</p></span>
            </div>
            <div class="message_2" id="msgBoard" >
                {/* <p>2020.10.07</p> */}
                {Msgs && Msgs.map(({sender, message}, index)=>{
                    if(sender === my_email){
                        return(
                            <div key={index} class="message_2_me">
                                <div class="message_2_me_text"><div>{message}</div></div>
                                
                            </div>
                        )
                    }
                    return(
                            <div class="message_2_you">
                            <img id="send_msg_pic" src={profile_pic[0]}/>
                            <div class="message_2_you_text">{message}</div></div>
                        )
                })}
                {chat.map(({data, id}, index)=>{
                    if(id === yourID){
                        // console.log('id: ',id)
                        // console.log('yourId: ', yourID)
                        return(
                            <div key={index} class="message_2_me">
                                <div class="message_2_me_text"><div>{data}</div></div>
                                
                            </div>
                        )
                    }
                    return(
                            <div class="message_2_you">
                            <img id="send_msg_pic" src={profile_pic}/>
                            <div class="message_2_you_text">{data}</div></div>
                        )
                })}
                
            </div>
            <div class="message_3">
                <div id="message_3_emoji"><div></div></div> 
                <form onSubmit={onMessageSubmit}>
                    <input id="sendMsgBox"  
                        id="MsgInput"
                        name="message" 
                        onChange={e => onTextChange(e)} 
                        value={state.message} 
                        label="Message" 
                    /> 
                    <button>보내기</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Chat);