import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Nav.css'
import { FaUserTie } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";


const Sidebar = () => {
    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname ,end:true})

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
            <div className='nav-head-title type-2'><h3>株式会社英語管理画面</h3></div>

            <ul>
                <CustomLink to="/company_admin/workers"><FaUserTie></FaUserTie>社員一覧</CustomLink>
                <CustomLink to="/company_admin/courses"><FaUserGraduate></FaUserGraduate>コース</CustomLink>
            </ul>
            <Link className="out"><MdOutlineLogout></MdOutlineLogout>ログアウト</Link>
        </div>
    )
}


export default Sidebar