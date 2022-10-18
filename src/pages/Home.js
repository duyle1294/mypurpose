import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div id='wrapper'>
      <div className='container'>
        <form>
          <h1 className='text-center'>My Purpose</h1>
          <h2 className='text-center'>GAL管理画面</h2>
          <div className='login'>
            <label for="email">ログインメール</label>
            <input type="email" placeholder="メールアドレス" id="email"></input>
            <label for="password">パスワード</label>
            <input type="password" placeholder="パスワード" id="password"></input>
            <label for="remember">
              <input type="checkbox" id="remember"></input>
              ログイン状態を維持
            </label>
          </div>
          <Link to="admin/companies"><div className='text-center'><button type='submit' className='bg-btn'>ログイン</button></div></Link>
        </form>
      </div>
    </div>
  )
}

export default Home