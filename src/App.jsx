import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';


import { Provider } from "react-redux"
import { ThemeProvider } from '@mui/material/styles';

import store from "./store"

import { muiTheme } from "./muiTheme"

import AuthLayout from "./layouts/AuthLayout"

import SignUp from "./pages/SignUp"

import 'react-toastify/dist/ReactToastify.css';
import './style/toast.css'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>

          <ToastContainer />
        </ThemeProvider>
      </Provider>
    </Router>
  )
}

export default App
