import { Route, Routes } from "react-router-dom"
import './App.css'
import Companies from "./pages/Companies"
import Home from "./pages/Home"
import Admins from "./pages/Admins"
import Workers from "./pages/Workers"
import Works from "./pages/Works"
import WorkersList from "./pages/WorkersList"
import Course from "./pages/Course"
import SetCourse from "./pages/SetCourse"

import Navbar from "./componets/Navbar/Navbar";
import UserGroups from "./pages/UserGroups"
import CompanyAdmin from "./pages/CompanyAdmin"
import CompanyWorkers from "./pages/CompanyWorkers"
import CompanyCourses from "./pages/CompanyCourses"
import CourseDetail from "./pages/CourseDetail"
import WorkDetail from "./pages/WorkDetail"
import WorkerDetail from "./pages/WorkerDetail"



function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="admin/companies" element={<Companies />} />
          <Route path="admin/admins" element={<Admins />} />
          <Route path="company" element={<Workers />} />
          <Route path="/workers" element={<WorkersList />} />
          <Route path="/works" element={<Works />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/group_courses" element={<SetCourse />} />
          <Route path="/groups" element={<UserGroups />} />
          <Route path="company_admin" element={<CompanyAdmin />} />
          <Route path="/company_admin/workers" element={<CompanyWorkers />} />
          <Route path="/company_admin/workers/worker" element={<WorkerDetail />} />
          <Route path="/company_admin/courses" element={<CompanyCourses />} />
          <Route path="/company_admin/courses/course" element={<CourseDetail />} />
          <Route path="/company_admin/courses/course/work" element={<WorkDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;