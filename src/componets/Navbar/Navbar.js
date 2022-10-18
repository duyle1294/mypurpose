import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Nav.css'
import { FaUserAlt } from "react-icons/fa";
import { FaKaaba } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <h2><span>GPL</span>管理画面</h2>
      </Link>
      <ul>
        <CustomLink to="admin/companies"><FaKaaba></FaKaaba>会社一覧</CustomLink>
        <CustomLink to="admin/admins"><FaUserCog></FaUserCog>アカウント</CustomLink>
      </ul>
      <div className="admin"><FaUserAlt></FaUserAlt>Admin</div>
    </nav>
  )
}

