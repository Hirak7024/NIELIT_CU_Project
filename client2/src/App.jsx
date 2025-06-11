import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from '../Layouts/UserLayout'
import HomePage from '../Pages/HomePage'
import SolutionsPage from '../Pages/SolutionsPage'
import './App.css'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        {/* User Layout Routes */}
        <Route element={<UserLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/solutions' element={<SolutionsPage />} />
          
        </Route>

        {/* Admin Layout Routes */}
        {/* <Route element={<AdminLayout />}> */}
          {/* <Route path='/adminPage' element={<AdminPage />} /> */}
          {/* <Route path='/adminPage/video/add' element={<YoutubeVideoAddForm />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
