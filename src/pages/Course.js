import React from 'react'
import SlideNav from '../componets/Navbar/SlideNav';
import './Course.css'
import { FaSortDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';


const Course = () => {

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <div className='wrapper'>
            <SlideNav></SlideNav>
            <div className='content'>
                <div className='heading'>
                    <h2 className='title'>コース一覧</h2>
                    <button className='create-btn'>＋ 新規作成</button>
                </div>
                <div className='courses-list'>
                    <div className='course-box'>
                        <div className='title'><input className='course-name' value='入社特訓' onChange={handleChange}></input><div className='delete'><MdDelete></MdDelete></div></div>
                        <div className='select-works'>
                            <div className='work'>
                                <span>ワーク</span><div className='select-option'><FaSortDown></FaSortDown>共感力</div>
                                <div className='delete'><MdDelete></MdDelete></div>
                            </div>
                            <div className='work'>
                                <span>ワーク</span><div className='select-option'><FaSortDown></FaSortDown>リスクマネジメント</div>
                                <div className='delete'><MdDelete></MdDelete></div>
                            </div>
                        </div>
                        <button className='bg-btn'>＋ 追加</button>
                    </div>
                    <div className='course-box'>
                        <div className='title'><input className='course-name' value='管理スキルアップ' onChange={handleChange}></input><div className='delete'><MdDelete></MdDelete></div></div>

                        <div className='select-works'>

                        </div>
                        <button className='bg-btn'>＋ 追加</button>
                    </div>
                </div>
                <div className='text-center'><button id='save-btn'>保 存</button></div>
            </div>
        </div>
    )
}

export default Course