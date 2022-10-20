import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../componets/Navbar/Sidebar';
import { course } from "../data/CoursesData";
import { userGroup } from "../data/CoursesData";
import './CompanyCourse.css';

const CompanyCourses = () => {
    return (
        <div className='wrapper'>
            <Sidebar></Sidebar>
            <div className='content'>
                <div className='heading'>
                    <h2 className='title'>コース一覧<h5>（21件）</h5></h2>
                </div>
                <div className='course-group'>
                    <h5>◆　{userGroup[0]}</h5>
                    <table className='mt-1'>
                        <thead>
                            <tr>
                                <th>コース名</th>
                                <th>ワーク数</th>
                                <th>公開日</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {course.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.countQuestions}</td>
                                        <td>{item.createDay}　{item.createTime}</td>
                                        <td className='text-center'>
                                            <Link to='/company_admin/courses/course'><button>詳細を見る</button></Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='course-group'>
                    <h5>◆　{userGroup[1]}</h5>
                    <table className='mt-1'>
                        <thead>
                            <tr>
                                <th>コース名</th>
                                <th>ワーク数</th>
                                <th>公開日</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {course.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.countQuestions}</td>
                                        <td>{item.createDay}　{item.createTime}</td>
                                        <td className='text-center'>
                                            <button>詳細を見る</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default CompanyCourses