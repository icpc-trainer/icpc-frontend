import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import './api/index.ts'
import { ThemeProvider } from './contexts/themeContext'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
)
