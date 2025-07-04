import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppContext from '../Utils/Context.jsx'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContext>
      <App />
    </AppContext>
  </BrowserRouter>,
)
