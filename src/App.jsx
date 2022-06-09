import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';


import { Provider } from "react-redux"
import { ThemeProvider } from '@mui/material/styles';

import store from "./store"

import { muiTheme } from "./muiTheme"

import AuthLayout from "./layouts/AuthLayout"

import SignUp from "./pages/SignUp"
import Confirm from "./pages/Confirm"
import RecoverPassword from "./pages/RecoverPassword";
import NewPassword from "./pages/NewPassword";
import Login from "./pages/Login";

import 'react-toastify/dist/ReactToastify.css';
import './style/toast.css'

function App() {
  console.log('APP LOAD')
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="confirm/:token" element={<Confirm />} />
              <Route path="recover-password" element={<RecoverPassword />} />
              <Route path="new-password/:token" element={<NewPassword />} />
            </Route>
          </Routes>

          <ToastContainer />
        </ThemeProvider>
      </Provider>
    </Router>
  )
}

export default App
