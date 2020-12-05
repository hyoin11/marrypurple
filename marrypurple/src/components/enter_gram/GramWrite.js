import React, { Component } from 'react';
import '../../lib/styles/gram.scss';
import $ from 'jquery';
import axios from 'axios';

const GramWrite = ({ onSubmit, backClick }) => {
    
    function readURL(input) {
        if(input.files && input.files[0]) {
            var reader = new FileReader();
        
            reader.onload = function (e) {
                $('#photoPre').css({'display': 'none'});
                $('#gramW_1_photo img').css({'display': 'block'});
                $('#gramW_1_photo img').attr('src', e.target.result);
            }
        
            reader.readAsDataURL(input.files[0]);
        }
    }

    const fileSelectHandler = e =>{
        imgbbUploader(e.target.files[0]).then(res => {
            readURL(e.target);
            $('#gramW_1_file').addClass(res.data.data.url);
        });
    }

    const imgbbUploader = ( img ) => {
        let body = new FormData();
        body.set('key', 'a88534ba3406503cc7c607af2810b2d9');
        body.append('image', img)
    
        return axios({
            url: 'https://api.imgbb.com/1/upload',
            method: 'post',
            timeout: 0,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: body
        })
    }

    return(
        <>
            <div className="gramW_1">
                <form method="post" enctype="multipart/form-data" onSubmit={onSubmit} action="/gram_main">
                    <div><div className="gramW_1_back" onClick={backClick}></div><p>작성하기</p></div>
                    <label for="gramW_1_file">사진선택</label>
                    <input type="file" id="gramW_1_file" name="file" onChange={fileSelectHandler}/>
                    <div id="gramW_1_photo">
                        <span id="photoPre">미리보기</span>
                        <img/>
                    </div>
                    <textarea placeholder="내용을 입력해주세요.(100자 제한)
카카오톡 아이디 또는 개인 연락처를 
노출할 경우 계정이 정지될 수 있습니다." name="content" ></textarea>
                    <p id="warning">* 개인 연락처 노출, 부적절한 이미지 등록,<br/>신고 3회 이상의 경우 계정이 정지처리 됩니다.</p>
                    <input type="submit" value="완료"/>
                </form>
            </div>
        </>
    )
}

export default GramWrite;