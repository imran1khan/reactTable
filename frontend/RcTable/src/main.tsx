import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import SaerchTable from './Pages/SaerchTable.tsx'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
    <SaerchTable/>
    </RecoilRoot>
  </React.StrictMode>,
)
