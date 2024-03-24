import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppTheme } from 'src/shared/theme/AppTheme.tsx'

import { App } from 'src/app/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppTheme>
      <App />
    </AppTheme>
  </React.StrictMode>,
)
