import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Home/sections/Login/Login.tsx'
import Home from './pages/Home/sections/Home/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />          


        </Routes>
      </BrowserRouter>

    </ThemeProvider>

  </React.StrictMode>,
)
