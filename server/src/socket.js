import Chat from './models/chat';//chat 스키마 가져오기
let login_ids = {};
const socketEvents = (io)=>{
    io.on('connection', (socket) => { // 웹소켓 연결 시
        console.log('웹소켓이 실행됩니다.');
        console.log('yourId', socket.id)
        socket.emit('yourId', socket.id);

        //로그인
        socket.on('login', function(login){
            console.log('login 이벤트를 받았습니다.');
            console.dir(login);
    
            login_ids[login.id] = socket.id;
            socket.login_id = login.id;
    
            console.log('접속한 클라이언트 id 갯수 : %d', Object.keys(login_ids).length);
        });
        socket.on('giveMe', function(){
            socket.emit('yourId', socket.id);
        })

        // 메세지 보내기 + DB에 메세지 넣기
        socket.on('sendMessage', function(data) {
            socket.emit('yourId', socket.id);

            console.log('message 이벤트를 받았습니다.',data);
            if(login_ids[data.recepient]){
                io.sockets.emit('message', data);
            }else{
                console.log('보내는사람',data.sender)
                io.to(socket.id).emit('message', data);
            }
            //chat스키마에 대화내용 추가
            let chat = new Chat({ sender: data.sender, message: data.data, users:[data.recepient,data.sender] });
    
            chat.save(function (err, data) {
            if (err) {// TODO handle the error
                console.log("error");
            }
            console.log('message is inserted');
            });
    
        });
    });
};

export default socketEvents;
