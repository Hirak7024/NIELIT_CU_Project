import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import ConsultationForm from './Pages/ConsultationForm.jsx';
import ChatBot from './Pages/ChatBot.jsx';
import AdminPage from './Pages/AdminPage.jsx';

import UserLayout from './Layouts/UserLayout.jsx';
import AdminLayout from './Layouts/AdminLayout.jsx';
import YoutubeVideoAddForm from './AdminSideComponents/YoutubeVideoAddForm.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Layout Routes */}
        <Route element={<UserLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<ConsultationForm />} />
          <Route path='/chatBot' element={<ChatBot />} />
        </Route>

        {/* Admin Layout Routes */}
        <Route element={<AdminLayout />}>
          <Route path='/adminPage' element={<AdminPage />} />
          <Route path='/adminPage/video/add' element={<YoutubeVideoAddForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
