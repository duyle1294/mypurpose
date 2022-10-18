import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Nav.css'
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const SlideNav = () => {

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })

    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

  return (
    <div className='slide-nav'>
      <div className='nav-head-title'><h3>株式会社英語管理画面</h3></div>

      <ul>
        <CustomLink to="/workers"><FaUserTie></FaUserTie>社員一覧</CustomLink>
        <CustomLink to="/works"><FaOutdent></FaOutdent>ワーク</CustomLink>
        <CustomLink to="/courses"><FaUserGraduate></FaUserGraduate>コース</CustomLink>
        <CustomLink to="/groups"><FaUsers></FaUsers>ユーザーグループ</CustomLink>
        <CustomLink to="/group_courses"><FaListOl></FaListOl>コース割り当て</CustomLink>
      </ul>
      <Link className="out"><MdOutlineLogout></MdOutlineLogout>ログアウト</Link>
    </div>
  )
}

export default SlideNav