import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <>coucou</>
  </StrictMode>
)
