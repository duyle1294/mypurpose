import React, { useState } from 'react';
import Sidebar from '../componets/Navbar/Sidebar';
import { CompanyWorkersData } from "../data/ CompanyWorkersData";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaFileCsv } from "react-icons/fa";
import { TbAlignLeft } from "react-icons/tb";
import './CompanyWorkers.css';
import { Link } from 'react-router-dom';

const CompanyWorkers = () => {

    const [modal, setModal] = useState(false);

    const toggleModel = () => {
        setModal(!modal)
    }

    return (
        <div className='wrapper'>
            <Sidebar></Sidebar>
            <div className='content'>
                <div className='heading'>
                    <h2 className='title'>社員一覧<h5>（21件）</h5></h2>
                    <div className='search'>
                        <input type='text' placeholder='キーワード'></input>
                        <button className='bg-btn'>検 索</button>
                    </div>
                    <button className='create-btn' onClick={toggleModel}>＋ 社員登録</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>名前</th>
                            <th>ユーザー<br></br>グループ</th>
                            <th>所属</th>
                            <th>コース<br></br>完了率</th>
                            <th>マイパーパス</th>
                            <th>最終<br></br>ログイン</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {CompanyWorkersData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className='name'>{item.name}</td>
                                    <td>{item.userGroup}</td>
                                    <td>{item.devision}</td>
                                    <td>{item.submitedCoursePercenRate}</td>
                                    <td>{item.mypurpose}</td>
                                    <td>{item.loginDate}<br></br>{item.loginTime}</td>
                                    <td className='text-center two-line'>
                                        <Link to = '/company_admin/workers/worker'><button>　詳 細 <div><TbAlignLeft></TbAlignLeft></div></button></Link>
                                        <button>サービス<br></br>サイトへ<div><FaExternalLinkAlt></FaExternalLinkAlt></div></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {modal && (
                    <div className='modal'>
                        <div className='container'>
                            <h1>社員新規作成</h1>
                            <div className='input-box'>
                                <div className='csv'>
                                    <div className='icon'><FaFileCsv></FaFileCsv></div>
                                    <p className='text'>インポートCSVファイルを選択する</p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='delete-btn' onClick={toggleModel}>キャンセル</button>
                                <button className='bg-btn' onClick={toggleModel}>選 択</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CompanyWorkers