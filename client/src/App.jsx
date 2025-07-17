import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from '../Layouts/UserLayout'
import HomePage from '../Pages/HomePage'
import SolutionsPage from '../Pages/SolutionsPage'
import StudentMentalHealth from '../Pages/StudentMentalHealth'
import MentalHealthPrograms from '../Pages/MentalHealthPrograms'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import AdminLayout from '../Layouts/AdminLayout'
import AdminSignUp from '../Pages/AdminSide/AdminSignUp'
import AdminLogin from '../Pages/AdminSide/AdminLogin'
import AdminHomePage from '../Pages/AdminSide/AdminHomePage'
import { ToastContainer } from 'react-toastify';
import RegisteredUsersChats from '../Pages/AdminSide/RegisteredUsersChats'
import AnonymousUserChats from '../Pages/AdminSide/AnonymousUserChats'
import YouTubeVideo from '../Pages/AdminSide/YouTubeVideo'
import ConsultationForm from '../Pages/ConsultationForm'
import Blogs from '../Pages/Blogs/Blogs'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        {/* UserSide Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<UserLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/solutions' element={<SolutionsPage />} />
          <Route path='/resources_student_mental_health' element={<StudentMentalHealth />} />
          <Route path='/resources_mental_health_programs' element={<MentalHealthPrograms />} />
          <Route path='/consultationForm' element={<ConsultationForm/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
        </Route>

        {/* AdminSide Routes */}
        <Route path='/adminSide/signup' element={<AdminSignUp />} />
        <Route path='/adminSide' element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route path='/adminSide/homePage' element={<AdminHomePage />} />
          <Route path='/adminSide/registeredUsers' element={<RegisteredUsersChats />} />
          <Route path='/adminSide/anonymousUsers' element={<AnonymousUserChats />} />
          <Route path='/adminSide/youtubeVideos' element={<YouTubeVideo />} />
        </Route>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
