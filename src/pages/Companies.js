import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { companiesData } from "../data/companiesData";

const Companies = () => {

  const [modal, setModal] = useState(false);

  const toggleModel = () => {
    setModal(!modal)
  }

  return (
    <div className='content'>
      <div className='heading'>
        <h2 className='title'>会社一覧</h2>
        <div className='search'>
          <input type='text' placeholder='キーワード'></input>
          <button className='bg-btn'>検 索</button>
        </div>
        <button className='create-btn' onClick={toggleModel}>＋ 新規作成</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>会社名</th>
            <th className='text-center'>マネージャー数</th>
            <th className='text-center'>社員数</th>
            <th>利用開始日</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {companiesData.map((item, index) => {
          return (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td className='text-center'>{item.countManagers}</td>
            <td className='text-center'>{item.countWorkers}</td>
            <td>{item.startDay}~</td>
            <Link to='/company'><td className='text-center'><button>もっと見る</button></td></Link>
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
              <label for="name">会社名</label>
              <input type="text" placeholder="" id="name"></input>
              <label for="start-day">利用開始日</label>
              <input type="date" placeholder="" id="start-day"></input>
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

export default Companies