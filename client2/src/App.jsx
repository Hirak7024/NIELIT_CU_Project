import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from '../Layouts/UserLayout'
import HomePage from '../Pages/HomePage'
import SolutionsPage from '../Pages/SolutionsPage'
import StudentMentalHealth from '../Pages/StudentMentalHealth'
import MentalHealthPrograms from '../Pages/MentalHealthPrograms'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import AdminSignUp from '../Pages/AdminSignUp'
import AdminLayout from '../Layouts/AdminLayout'
import AdminLogin from '../Pages/AdminLogin'
import { ToastContainer } from 'react-toastify';
 import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ❌ No Layout for Login/Signup */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        {/* ✅ With UserLayout (Navbar + Footer) */}
        <Route element={<UserLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/solutions' element={<SolutionsPage />} />
          <Route path='/resources_student_mental_health' element={<StudentMentalHealth />} />
          <Route path='/resources_mental_health_programs' element={<MentalHealthPrograms />} />
        </Route>

        {/* Admin Routes Here */}
        <Route path='/adminSideSignup' element={<AdminSignUp />} />
        <Route path='/adminSideLogin' element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          {/* <Route path='/adminPage' element={<AdminPage />} /> */}
        </Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
