import { Route, Routes } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Pages/Website/Auth/SignUp";
import Login from "./Pages/Website/Auth/Login";
import ResetPass from "./Pages/Website/Auth/ResetPass";
import Home from "./Pages/Website/Home";
import { Themes } from "./Pages/Website/Context/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import RequireAuth from "./Pages/Website/Auth/RequireAuth";
import PersistLogin from "./Pages/Website/Auth/PersistLogin";
import { I18nextProvider } from 'react-i18next';
import {i18n} from "./translation"

export default function App() {
  const themes = useContext(Themes);
  return (
    <ThemeProvider theme={themes.theme}>
      <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth-resetpassword-basic" element={<ResetPass />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Routes>
      </I18nextProvider>
    </ThemeProvider>
  );
}
