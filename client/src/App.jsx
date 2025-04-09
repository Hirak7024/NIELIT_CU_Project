import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header.jsx';
import ConsultationForm from './Pages/ConsultationForm.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<ConsultationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
