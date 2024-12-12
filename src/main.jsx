import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'
import Master from './components/Master.jsx'

createRoot(document.getElementById('root')).render(
<Master></Master>
)
