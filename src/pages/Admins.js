import React, { useState } from 'react';
import { accountsData } from "../data/accoutData";

const Admins = () => {

  const [modal, setModal] = useState(false);

  const toggleModel = () => {
    setModal(!modal)
  }


  return (
    <div className='content'>
      <div className='heading'>
        <h2 className='title'>アカウント一覧</h2>
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
            <th>追加日</th>
          </tr>
        </thead>
        <tbody>
        {accountsData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.regisDay}~</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      {modal && (
        <div className='modal'>
          <div className='container'>
            <h1>会社新規作成</h1>
            <div className='input-box'>
              <label for="name">名前</label>
              <input type="text" placeholder="" id="name"></input>
              <label for="email">メールアドレス</label>
              <input type="email" placeholder="" id="email"></input>
              <label for="add-day">追加日</label>
              <input type="date" placeholder="" id="add-day"></input>
            </div>
            <div className='text-center'>
              <button className='bg-btn' onClick={toggleModel}>登 録</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Admins