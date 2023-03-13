import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// El StrictMode unicamente funcion en desarrollo ( por eden, el useEffect se ejecuta 2 veces )
