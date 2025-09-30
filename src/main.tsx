import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MainRouter from './router/index.tsx'
import AuthProvider from './context/user/index.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'

const CLIENT_GOOGLE_ID = '403752291305-0lhscpeo65p7h709b6le88nopvkup5io.apps.googleusercontent.com'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_GOOGLE_ID}>
      <AuthProvider>
        <MainRouter/>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
