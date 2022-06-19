import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';


import { Provider } from "react-redux"
import { ThemeProvider } from '@mui/material/styles';

import store from "./store"

import { muiTheme } from "./muiTheme"

import AuthLayout from "./layouts/AuthLayout"
import DashLayout from "./layouts/DashLayout";

import SignUp from "./pages/SignUp"
import Confirm from "./pages/Confirm"
import RecoverPassword from "./pages/RecoverPassword";
import NewPassword from "./pages/NewPassword";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import Concept from "./pages/Concept";

import 'react-toastify/dist/ReactToastify.css';
import './style/toast.css'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

function App() {
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

            <Route path="/dashboard" element={<DashLayout />}>
              <Route index element={<Dashboard />} />
            </Route>

            <Route path="/concept" element={<DashLayout />}>
              <Route index element={<Concept />} />
            </Route>
          </Routes>

          <ToastContainer />
        </ThemeProvider>
      </Provider>
    </Router>
  )
}

export default App
