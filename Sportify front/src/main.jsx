import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Turf from './components/Turf';
import Hom from './components/Hom';
import Login from './components/Login';
import Form from './components/Form';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="/form" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/turf" element={<Turf />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </StrictMode>,
  </BrowserRouter>

)
