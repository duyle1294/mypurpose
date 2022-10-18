import React, { useState } from 'react';
import SlideNav from '../componets/Navbar/SlideNav';
import './Works.css'

import { worksData } from "../data/worksData";

const Works = () => {

    const [modal, setModal] = useState(false);

    const toggleModel = () => {
        setModal(!modal)
    }

    return (
        <div className='wrapper'>
            <SlideNav></SlideNav>
            <div className='content'>
                <div className='heading'>
                    <h2 className='title'>ワーク一覧</h2>
                    <div className='search'>
                        <input type='text' placeholder='キーワード'></input>
                        <button className='bg-btn'>検 索</button>
                    </div>
                    <button className='create-btn' onClick={toggleModel}>＋ 新規作成</button>
                </div>
                <div className='work-list'>
                    
                    {worksData.map((item, index) =>{
                        return(
                            <div className='work-box' key={index}>
                            <div className='index'>{index + 1}</div>
                            <div className='thumbnail'>
                                <img src={item.url}></img>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ワーク名</th>
                                        <th>説明</th>
                                        <th>作成日</th>
                                        <th>質問数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='name'>{item.name}</td>
                                        <td className='clip-text'>{item.explain}</td>
                                        <td>{item.createDay}<br></br>{item.createTime}</td>
                                        <td>{item.countQuestions}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='control'>
                                <button className='bg-btn'>詳 細</button>
                                <button className='delete-btn'>削 除</button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Works