import React, { useState } from 'react';
import SlideNav from '../componets/Navbar/SlideNav';

import { workersData } from "../data/workersData";

const Companies = () => {

    const [modal, setModal] = useState(false);

    const toggleModel = () => {
        setModal(!modal)
    }

    return (
        <div className='wrapper'>
            <SlideNav></SlideNav>
            <div className='content'>
                <div className='heading'>
                    <h2 className='title'>社員一覧</h2>
                    <div className='search'>
                        <input type='text' placeholder='キーワード'></input>
                        <button className='bg-btn'>検 索</button>
                    </div>
                    <button className='create-btn' onClick={toggleModel}>＋ 新規作成</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>名前</th>
                            <th>メールアドレス</th>
                            <th>最終ログイン</th>
                            <th>権限</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {workersData.map((item, index) => {
                            if (item.permission == 0) {
                                return (item.permission = '一般')
                            }
                            if (item.permission == 1) {
                                return (item.permission = '管理者')
                            }

                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.loginTime}</td>
                                    <td>{item.permission}</td>
                                    <td className='text-center'><button className='delete-btn'>削 除</button></td>
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
                                <label for="name">名前</label>
                                <input type="text" placeholder="" id="name"></input>
                                <label for="mail">メールアドレス</label>
                                <input type="email" placeholder="" id="mail"></input>
                            </div>
                            <div className='text-center'>
                                <button className='bg-btn' onClick={toggleModel}>登 録</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Companies