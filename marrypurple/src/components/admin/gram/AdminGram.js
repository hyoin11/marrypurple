import React from 'react';
import '../../../lib/styles/admin/adminGram.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
// import DataTable from "@bit/adeoy.utils.data-table";
import { MDBDataTable } from 'mdbreact';

const AdminGram = ({ history, listAll }) => {
    let list = [];
    if(listAll){
      list = listAll;
    }

    let num = 1;
    for(let i=0; i<list.length; i++){
      // console.log(listGrams[i]);
      list[i] = {...list[i], index: num, user_nick: list[i].User.user_nick}
      num++;
    }

    const data = {
        columns: [
          {
            label: '#',
            field: 'index',
            sort: 'asc',
          },
          {
            label: '닉네임',
            field: 'user_nick',
            sort: 'asc',
          },
          {
            label: '내용',
            field: 'content',
            sort: 'asc',
          },
          {
            label: '좋아요 수',
            field: 'likeCount',
            sort: 'asc',
          },
          {
            label: '게시 날짜',
            field: 'writeDate',
            sort: 'asc',
          },
          {
            label: '_id',
            field: '_id',
            sort: 'asc',
          }
        ],
        rows: list
      };

    const click = e => {
      const _id = $(e.target).parent().children('td:last-child')[0].innerText;
      console.log($(e.target).parent().children('td:last-child')[0].innerText);

      history.push(`/Admin_gram_read/${_id}`);
    }

    return (
        <>
            <h3><i className="fa fa-angle-right"></i> 메리퍼플그램</h3>
            <div className="admin_gram_table">
              <MDBDataTable
                  striped
                  bordered
                  hover
                  onClick={click}
                  data={data}
              />
            </div>
        </>
    )
}

export default AdminGram;