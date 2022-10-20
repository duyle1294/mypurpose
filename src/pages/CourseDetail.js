import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../componets/Navbar/Sidebar';
import { works } from "../data/CoursesData";
import './CompanyCourse.css';

const CourseDetail = () => {
    return (
        <div className='wrapper'>
            <Sidebar></Sidebar>
            <div className='content'>
                <div className='heading'>
                    <h2 className='title'>コース詳細</h2>
                </div>
                <div className='course'>
                    <div className='course-name'>
                        <div className='tag'>部長</div>
                        <h5 className=''>入社オンボーディング（コース）</h5>
                    </div>
                    <p>ワーク数：<span>{works.length}</span></p>
                </div>
                <table className='mt-1'>
                    <thead>
                        <tr>
                            <th>ワーク名</th>
                            <th className='text-center'>回答数ス</th>
                            <th className='text-center'>未回答数</th>
                            <th>公開日</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {works.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td className='text-center'>{item.countSubmitedQuestions}</td>
                                    <td className='text-center'>{item.countUnsubmitQuestions}</td>
                                    <td>{item.createDay}　{item.createTime}</td>
                                    <td><Link to='/company_admin/courses/course/work'><button>詳細を見る</button></Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CourseDetail