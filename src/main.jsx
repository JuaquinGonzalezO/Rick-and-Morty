import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RickyandmortyApp from './RickyandmortyApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickyandmortyApp />
  </StrictMode>,
)
