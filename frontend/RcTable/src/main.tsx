import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// import SaerchTable from './Pages/SaerchTable.tsx'
import { RecoilRoot } from 'recoil'
import SaerchTable2 from './Pages/Searchtable2'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <SaerchTable2/>
    </RecoilRoot>
  </React.StrictMode>,
)
