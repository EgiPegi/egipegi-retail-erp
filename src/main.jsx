import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { accountService } from './_services/account.service.js';
// import { ImSpinner10 } from 'react-icons/im';

accountService.refreshToken();
// console.log(accountService.refreshToken())
startApp()
function startApp() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
// function loadingApp() {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <ImSpinner10 size={42} className='animate-spin mr ml-0' />
//     </React.StrictMode>,
//   )
// }
