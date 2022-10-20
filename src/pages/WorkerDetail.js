import React, { useState } from 'react';
import Sidebar from '../componets/Navbar/Sidebar';
import { CompanyWorkersData } from "../data/ CompanyWorkersData";
import { userGroup } from "../data/ CompanyWorkersData";
import { FaSortDown } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import './WorkerDetail.css'


const WorkerDetail = () => {

  const [modal, setModal] = useState(false);
  const [ul, setUL] = useState(false);

  const toggleModel = () => {
    setModal(!modal)
  }
  const toggleUl = () => {
    setUL(!ul)
  }

  return (
    <div className='wrapper'>
      <Sidebar></Sidebar>
      <div className='content'>
        <div className='heading'>
          <h2 className='title'>{CompanyWorkersData[0].name}</h2>
        </div>
        <div className='input-box '>
          <div className='line'>
            <p>ユーザーグループ</p>
            <div className='select-option' onClick={toggleModel}>
              <FaSortDown></FaSortDown>{userGroup[0]}
              {modal && (
                <ul>
                  <li>{userGroup[0]}</li>
                  <li>{userGroup[1]}</li>
                  <li>{userGroup[2]}</li>
                </ul>
              )}

            </div>
          </div>
          <div className='line'><p>所属</p><h4>{CompanyWorkersData[0].devision}</h4></div>
          <div className='line'><p>メールアドレス</p><h4>{CompanyWorkersData[0].email}</h4></div>
          <div className='line'><p>最終ログイン</p><h4>{CompanyWorkersData[0].loginDate}　{CompanyWorkersData[0].loginTime}</h4></div>
          <div className='line'>
            <p>権限</p>
            <div className='select-option' onClick={toggleUl}><FaSortDown></FaSortDown>一般
              <FaSortDown></FaSortDown>
              {ul && (
                <ul>
                  <li>一般</li>
                  <li>管理者</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className='controller'>
          <button className=''>ユーザーを削除する</button>
          <button className='bg-btn'>ユーザー詳細を見る <FaExternalLinkAlt></FaExternalLinkAlt></button>
        </div>
      </div>
    </div>
  )
}

export default WorkerDetail