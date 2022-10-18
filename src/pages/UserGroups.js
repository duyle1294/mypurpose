import React from 'react'
import SlideNav from '../componets/Navbar/SlideNav';
import { MdDelete } from 'react-icons/md';
import './UserGroups.css'

const UserGroups = () => {

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
                <div className='group-list'>
                    <div className='title'><input className='course-name' value='部長' onChange={handleChange}></input><div className='delete'><MdDelete></MdDelete></div></div>
                    <div className='title'><input className='course-name' value='社員' onChange={handleChange}></input><div className='delete'><MdDelete></MdDelete></div></div>
                    <div className='title'><input className='course-name' value='アルバイト' onChange={handleChange}></input><div className='delete'><MdDelete></MdDelete></div></div>
                </div>
                <div className='text-center'><button id='save-btn'>保 存</button></div>
            </div>
        </div>
    )
}

export default UserGroups