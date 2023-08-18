import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { accountService } from './_services/account.service.js';
// import 'flowbite/dist/flowbite.js'
// attempt silent token refresh before startup
accountService.refreshToken().finally(startApp);
function startApp() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
