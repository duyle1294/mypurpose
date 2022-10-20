import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../componets/Navbar/Sidebar';
import { coursesDetail } from "../data/CoursesData";
import { works } from "../data/CoursesData";
import { userGroup } from "../data/CoursesData";
import { FaExternalLinkAlt } from "react-icons/fa";

import './CompanyCourse.css';


const WorkDetail = () => {
  return (
    <div className='wrapper'>
    <Sidebar></Sidebar>
    <div className='content'>
        <div className='heading'>
            <h2 className='title'>ワーク詳細</h2>
        </div>
        <div className='work'>
            <div className='thumbnail'>
                <img src={works[0].url}></img>
            </div>
            <div className='work-detail'>
                <p>公開日：{works[0].createDay}　{works[0].createTime}</p>
                <p>ユーザーグループ：{userGroup[0]}</p>
                <h5>{works[0].name}</h5>
                <p>回答数：{works[0].countSubmitedQuestions} <span>/ {works[0].countUnsubmitQuestions}</span></p>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>名前</th>
                    <th></th>
                    <th>日時</th>
                    <th>ステータス</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {coursesDetail.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.wokerName}</td>
                            <td>{item.devision}</td>
                            <td>{item.createDay}　{item.createTime}</td>
                            <td>{item.status}</td>
                            <td><Link to='/worker'><button>詳細を見る<FaExternalLinkAlt></FaExternalLinkAlt></button></Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default WorkDetail