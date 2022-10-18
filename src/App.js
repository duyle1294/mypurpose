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
        </Routes>
      </div>
    </>
  );
}

export default App;