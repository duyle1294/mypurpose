import React from 'react'
import SlideNav from '../componets/Navbar/SlideNav';
import './Course.css'
import { FaSortDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SetCourse = () => {

    function handleChange(event) {
        console.log(event.target.value);
      }

    return (
        <div className='wrapper'>
            <SlideNav></SlideNav>
            <div className='content'>
                <div className='heading'>
                    <h2 className='title'>コース割り当て</h2>
                </div>
                <div className='courses-list'>
                    <div className='course-box'>
                        <div className='title'><input className='course-name' value='部長' onChange={handleChange}></input><div className='delete'><MdDelete></MdDelete></div></div>
                        <div className='select-works'>
                            <div className='work'>
                                <span>1</span><div className='select-option'><FaSortDown></FaSortDown>共感力</div>
                                <div className='delete'><MdDelete></MdDelete></div>
                            </div>
                            <div className='work'>
                                <span>2</span><div className='select-option'><FaSortDown></FaSortDown>リスクマネジメント</div>
                                <div className='delete'><MdDelete></MdDelete></div>
                            </div>
                        </div>
                        <button className='bg-btn'>＋ 追加</button>
                    </div>
                    <div className='course-box'>
                        <div className='title'><input className='course-name' value='社員' onChange={handleChange}></input><div className='delete'><MdDelete></MdDelete></div></div>

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

export default SetCourse