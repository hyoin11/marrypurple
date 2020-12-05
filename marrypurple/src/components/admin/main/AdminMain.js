import React from 'react';
import '../../../lib/styles/admin/adminstyle.scss';

const AdminMain = ({ user, reportList }) => {
    let date = new Date();
    const today = date.getUTCFullYear() + '년 ' + (date.getUTCMonth() + 1) + '월 ' + date.getUTCDate() + '일';

    console.log(date.getUTCFullYear()+'-'+(date.getUTCMonth() + 1)+'-'+date.getUTCDate());
    let userList = [];
    if(user){
        userList = user;
    }
    let count = 0;
    for(let i=0; i<userList.length; i++){
        if(date.getUTCFullYear()+'-'+(date.getUTCMonth() + 1)+'-0'+date.getUTCDate() === userList[i].regdate.slice(0,10)){
            count++;
        }
    }

    return (
        <>
            {user && reportList && (
                <div class="row">
                    <div class="col-lg-9 main-chart">
                        <div class="row mt">
                            <div class="col-md-4 col-sm-4 mb">
                                <div class="grey-panel pn donut-chart">
                                    <div class="grey-header">
                                        <h5>전체 회원 수</h5>
                                    </div>
                                    <div class="row">
                                        <h2>{user.length}명</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row tt">
                            <div class="col-md-4 col-sm-4 mb">
                                <div class="darkblue-panel pn">
                                    <div class="darkblue-header">
                                        <h5>신규 회원 수</h5>
                                    </div>
                                    <p>{today}</p>
                                    <div class="darkblue-content">
                                        <h5>{count}명</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 mb">
                                <div class="message-p pn">
                                    <div class="message-header">
                                        <h5>신고 회원 수</h5>
                                    </div>
                                    <div class="row">
                                        <p>{reportList.length} 명</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AdminMain;