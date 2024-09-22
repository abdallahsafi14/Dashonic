import { styled } from "styled-components";
import { useState, useContext, useEffect } from "react";
import "./SideBar.css";
import { NavLink, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import activeLogo from "./activeSideBar.png";
import unActiveLogo from "./unActiveSideBar.png";
import LightActiveLogo from "./activeLightSideBar.png";
import {Themes,ThemeProvider} from "../Pages/Website/Context/ThemeContext";
import { colors } from "../Helper/Colors";
import i18n from "i18next";
import { useTranslation } from "react-i18next";


// Language


// Styled
const StyledAside = styled.aside`
  background-color: ${(prop) => prop.theme.sidebarBackgroundColor} !important;
  color: ${(prop) => prop.theme.sidebarTextColor} !important;
`;

export default function SideBar(props) {
  
  // Cookies

  const StyledLinkedList = styled.li`
    padding: 0;
    &:hover {
      background-color: ${(prop) => prop.theme.sidebarActiveColor} !important;
      transition: color 0.3s;
      color: ${(prop) => prop.theme.primaryTextColor} !important;
    }
    ${!props.activeBrand &&
    `
    &:hover{
    width: 235px;
    }
    overflow:hidden;
    `}
  `;
  const StyledNavLink = styled(NavLink)`
    height: 100%;
    padding: 10px
      ${!props.activeBrand &&
      `
    span {
      display: none !important;
    }
  
    
    `};
  `;
  const cookie = new Cookies();
  // state
  const [themeRadio, setThemeRadio] = useState(cookie.get("DARK"));
  const [transRadio, setTransRadio] = useState(cookie.get("i18next") =="en");

  const themes = useContext(Themes);

  const handleRadioChangeTheme = () => {
    const theme = cookie.get("DARK");
     themes.setTheme(theme  ? colors.dark : colors.light);
    
    console.log(themes.theme);
  };

  const [showSetting, setShowSetting] = useState(false);
  //  handle theme
  const handleRadioChange = (theme) => {
    cookie.set("DARK", theme);
  };
  useEffect(() => {
    window.document.dir=i18n.dir()
  },[cookie.get("i18next")])

  const {t} = useTranslation()
  return (
    <StyledAside
      className="sideBar "
      style={{ width: props.activeBrand ? "255px" : "70px" }}
    >
      <div className="side-bar-brand d-flex text-center justify-content-between align-items-center p-3 w-100">
        {props.activeBrand ? (
          cookie.get("DARK") ?<img src={activeLogo} className="" alt="brand logo" />: <img src={LightActiveLogo} className="" alt="brand logo" />
        ) : (
          <img
            src={unActiveLogo}
            className="brand-logo justify-self-center"
            alt="brand logo"
          />
        )}
        {!props.toggleSidebar && (
          <i
            onClick={() => {
              props.setActiveBrand((prev) => !prev);
              props.setToggleSidebar((prev) => !prev);
            }}
            role="button"
            className="fas fs-3  fa-solid fa-bars"
          ></i>
        )}
      </div>
      <ul className="side-menu p-0 mt-3">
        {props.activeBrand && <li className="menu-title">DASHBOARD</li>}
        <StyledLinkedList className="list-link">
          <StyledNavLink
            style={{}}
            className="position-relative d-flex align-items-center"
          >
            <i className="fas justify-self-center fs-5 me-2 fa-solid fa-home"></i>
            <span
              className=" menu-item fs-5"
              style={{ paddingInlineStart: props.activeBrand ? "0px" : "30px" }}
            >
              {t("Home")}
            </span>
          </StyledNavLink>
        </StyledLinkedList>
        <StyledLinkedList
          className="list-link"
          style={{ marginInline: "10px" }}
        >
          <div
            role="button"
            className="position-relative d-flex align-items-center"
            onClick={() => setShowSetting((prev) => !prev)}
            style={{ padding: "10px" }}
          >
            <i className="fas fs-5 me-2 fa-gear"></i>
            <span
              className=" menu-item fs-5"
              style={{ paddingInlineStart: props.activeBrand ? "0px" : "30px" }}
            >
              Settings
            </span>
          </div>
        </StyledLinkedList>

        {showSetting && (
          <StyledLinkedList className="list-link">
            <div
              role="button"
              className="position-relative d-flex align-items-center"
              style={{ padding: "10px" }}
            >
              <i className="fas fs-5 me-2 fa-circle-half-stroke"></i>
              <span
                className=" menu-item fs-5 d-flex align-items-center"
                style={{
                  paddingInlineStart: props.activeBrand ? "0px" : "30px",
                }}
              >
                <div className="d-flex align-items-center mx-1">
                  <input
                    className="me-2"
                    type="radio"
                    id="Dark"
                    name="toggle-lang"
                    checked={themeRadio}
                    onClick={() => {
                      handleRadioChange(true);
                      handleRadioChangeTheme();
                      setThemeRadio(true)
                    }}
                  />
                  <label className="fs-6" htmlFor="Dark">
                    Dark
                  </label>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <input
                    className="me-2"
                    type="radio"
                    id="Light"
                    name="toggle-lang"
                    checked={!themeRadio}
                    onClick={() => {
                      handleRadioChange(false);
                      handleRadioChangeTheme();
                      setThemeRadio(false)
                    }}
                  />
                  <label className="fs-6" htmlFor="Light">
                    Light
                  </label>
                </div>
              </span>
            </div>
          </StyledLinkedList>
        )}
        {showSetting && (
          <StyledLinkedList className="list-link">
            <div
              role="button"
              className="position-relative d-flex align-items-center"
              style={{ padding: "10px" }}
            >
              <i className="fas fs-5 me-2 fa-language"></i>
              <span
                className=" menu-item fs-5 d-flex align-items-center"
                style={{
                  paddingInlineStart: props.activeBrand ? "0px" : "30px",
                }}
              >
                <div className="d-flex align-items-center mx-1">
                  <input
                    className="me-2"
                    type="radio"
                    id="English"
                    name="toggle"
                    onClick={() => {
                      setTransRadio(prev => !prev)
                      i18n.changeLanguage("en")
                    }}
                    checked={transRadio}
                  />
                  <label className="fs-6" forHtml="English">
                    English
                  </label>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <input
                    className="me-2"
                    type="radio"
                    id="Arabic"
                    name="toggle"
                    onClick={() => {
                      setTransRadio(prev => !prev)
                      i18n.changeLanguage("ar")
                    }}
                    checked={!transRadio}
                  />
                  <label className="fs-6" forHtml="Arabic">
                    Arabic
                  </label>
                </div>
              </span>
            </div>
          </StyledLinkedList>
        )}
      </ul>
    </StyledAside>
  );
}
