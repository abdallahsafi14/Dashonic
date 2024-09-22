import Dropdown from "react-bootstrap/Dropdown";
import Profile from "./profile.jpg";
// import { useContext } from "react";
import { styled } from "styled-components";
// import { Themes } from "../Pages/Website/Context/ThemeContext";
import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from 'axios'

  //Styled
  const Navbar = styled.nav`
    background-color: ${(props) => props.theme.navbarBackground} !important;
    button {
      background-color: transparent;
      color: ${(props) => props.theme.sidebarTextColor} !important;
      border: none;
      outline: none;
      box-shadow: none;
    }
  `;
  const StyledDropdown = styled(Dropdown.Menu)`
    background-color: ${(props) => props.theme.navbarBackground};
  `;
  const StyledDropdownToggle = styled(Dropdown.Toggle)`
    &:blur{
    background-color:transparent;}
  `;
  const StyledDropdownItem = styled(Dropdown.Item)`
    background-color: ${(props) => props.theme.navbarBackground};
    color: ${(props) => props.theme.sidebarTextColor} !important;
    &:hover{
    background-color:${(props) => props.theme.sidebarActiveColor};}
  `;

  const Division = styled.div`
    background-color: ${(props) => props.theme.navbarBackground} !important;
    color: ${(props) => props.theme.sidebarTextColor} !important;
  `;
  const ActiveDiv = styled.div`
    background-color: ${(props) => props.theme.sidebarActiveColor} !important;
    color: ${(props) => props.theme.sidebarTextColor} !important;
  `;
  const StyledH5 = styled.h5`
    color: ${(props) => props.theme.primaryTextColor} !important;
  `;
  const StyledP = styled.p`
    color: ${(props) => props.theme.secondaryTextColor} !important;
    font-size: 13px !important;
  `;
  const Divider = styled.div`
    background-color: ${(props) => props.theme.divider};
    color: ${(props) => props.theme.sidebarTextColor} !important;
  `;
export default function NavBar(props) {
  // State
  const [searchVis, setSearch] = useState(false);

  // handle logout
  const cookie = new Cookies();
  const token = cookie.get("Bearer");

  async function handleLogout(e) {
    e.preventDefault()
    await axios.post("http://127.0.0.1:8000/api/logout", null, {
      headers: { Authorization: "Bearer " + token },
    });
    cookie.remove("Bearer");
    window.location.pathname = "/login";
  }

  return (
    <Navbar className={`nav navbar px-4 ${(!props.activeBrand) && "nav-adjust"}`}>
      <div className=" toggle-item d-flex justify-content-center align-items-center">
        {props.toggleSidebar && (
          <button
            onClick={() => {
              props.setActiveBrand((prev) => !prev);
              props.setToggleSidebar((prev) => !prev);
            }}
            className="btn-nav p-0"
          >
            <i className="fas fs-3 fa-solid fa-bars"></i>
          </button>
        )}
        <Dropdown className="d-none d-lg-block">
          <Dropdown.Toggle id="dropdown-basic" className="btn-nav">
            components
          </Dropdown.Toggle>

          <Division className="row">
            <StyledDropdown>
              <Division className="col-md-12">
                <StyledDropdownItem href="#/action-1">
                  Action
                </StyledDropdownItem>
                <StyledDropdownItem href="#/action-2">
                  Another action
                </StyledDropdownItem>
                <StyledDropdownItem href="#/action-3">
                  Something else
                </StyledDropdownItem>
              </Division>
              <Division className="col-md-12">
                <StyledDropdownItem href="#/action-1">
                  Action
                </StyledDropdownItem>
                <StyledDropdownItem href="#/action-2">
                  Another action
                </StyledDropdownItem>
                <StyledDropdownItem href="#/action-3">
                  Something else
                </StyledDropdownItem>
              </Division>
            </StyledDropdown>
          </Division>
        </Dropdown>

        <Dropdown className="d-none d-lg-block">
          <Dropdown.Toggle id="dropdown-basic" className="btn-nav">
            Categories
          </Dropdown.Toggle>

          <Division className="row">
            <StyledDropdown>
              <div className="col-md-12">
                <StyledDropdownItem href="#/action-1">
                  Action
                </StyledDropdownItem>
                <StyledDropdownItem href="#/action-2">
                  Another action
                </StyledDropdownItem>
                <StyledDropdownItem href="#/action-3">
                  Something else
                </StyledDropdownItem>
              </div>
              <div className="col-md-12">
                <StyledDropdownItem href="#/action-1">
                  Action
                </StyledDropdownItem>
                <StyledDropdownItem href="#/action-2">
                  Another action
                </StyledDropdownItem>
                <StyledDropdownItem href="#/action-3">
                  Something else
                </StyledDropdownItem>
              </div>
            </StyledDropdown>
          </Division>
        </Dropdown>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <button className="btn-nav">
          <i
            onClick={() => setSearch((prev) => !prev)}
            className="fas fa-light fa-magnifying-glass"
          ></i>
          {searchVis && (
            <Division className="floating-control px-2 py-2">
              <ActiveDiv className="px-2 w-100 d-flex justify-content-center align-items-center">
                <i className="fas me-2 text-light fs-6 fa-light fa-magnifying-glass"></i>
                <input
                  type="text"
                  className="ps-0 py-1"
                  placeholder="Search..."
                />
              </ActiveDiv>
            </Division>
          )}
        </button>

        <Dropdown className="d-none d-lg-flex d-flex justify-content-center align-items-center">
          <Dropdown.Toggle id="dropdown-basic" className="btn-nav">
            <i className="fas fa-regular fa-table-cells-large"></i>
          </Dropdown.Toggle>

          <Division className="">
            <StyledDropdown className="web-apps-menu ">
              <StyledDropdownItem className="w-100 bg-transparent d-flex justify-content-between align-items-center">
                <StyledH5 className="fs-6 m-0">Web Apps</StyledH5>
                <span className="link-primary  text-decoration-underline">
                  View All
                </span>
              </StyledDropdownItem>
              <div className="scroller">
                <StyledDropdownItem href="#" className="d-flex w-100">
                  <i className=" fas fa-regular fa-table-cells-large"></i>
                  <div className="flex-grow-1 ms-4">
                    <StyledH5 className="fs-6">Slack</StyledH5>
                    <StyledP className="text-muted ">
                      This is your moment.Let's reinvent work.
                    </StyledP>
                  </div>
                </StyledDropdownItem>
                <StyledDropdownItem href="#" className="d-flex w-100">
                  <i className=" fas fa-regular fa-table-cells-large"></i>
                  <div className="flex-grow-1 ms-4">
                    <StyledH5 className="fs-6">
                      Behance <span className="free">free</span>
                    </StyledH5>
                    <StyledP className="text-muted ">
                      Showcase your work.
                    </StyledP>
                  </div>
                </StyledDropdownItem>
                <StyledDropdownItem href="#" className="d-flex w-100">
                  <i className=" fas fa-regular fa-table-cells-large"></i>
                  <div className="flex-grow-1 ms-4">
                    <StyledH5 className="fs-6">Dropbox </StyledH5>
                    <StyledP className="text-muted text-wrap">
                      Keep life organized and work moving-all in one place
                    </StyledP>
                  </div>
                </StyledDropdownItem>
                <StyledDropdownItem href="#" className="d-flex w-100">
                  <i className=" fas fa-regular fa-table-cells-large"></i>
                  <div className="flex-grow-1 ms-4">
                    <StyledH5 className="fs-6">Dropbox </StyledH5>
                    <StyledP className="text-muted text-wrap">
                      Keep life organized and work moving-all in one place
                    </StyledP>
                  </div>
                </StyledDropdownItem>
                <StyledDropdownItem href="#" className="d-flex w-100">
                  <i className=" fas fa-regular fa-table-cells-large"></i>
                  <div className="flex-grow-1 ms-4">
                    <StyledH5 className="fs-6">
                      Mail Chimp <span className="premium">Premium</span>
                    </StyledH5>
                    <StyledP className="text-muted ">
                      The best value for your digital marketing budget
                    </StyledP>
                  </div>
                </StyledDropdownItem>
                <StyledDropdownItem href="#" className="d-flex w-100">
                  <i className=" fas fa-regular fa-table-cells-large"></i>
                  <div className="flex-grow-1 ms-4">
                    <StyledH5 className="fs-6">Github </StyledH5>
                    <StyledP className="text-muted ">
                      Where the worlds builds software
                    </StyledP>
                  </div>
                </StyledDropdownItem>
              </div>
            </StyledDropdown>
          </Division>
        </Dropdown>
        <button className="btn-nav p-0">
          <Dropdown className="d-block d-lg-block ">
            <Dropdown.Toggle id="dropdown-basic" className="btn-nav">
              <i className="fas fa-regular fa-bell"></i>
            </Dropdown.Toggle>

            <Division className="">
              <StyledDropdown className="web-apps-menu ">
                <StyledDropdownItem className="w-100 bg-transparent d-flex justify-content-between align-items-center">
                  <StyledH5 className="fs-6 m-0">Notification</StyledH5>
                  <span className="link-primary  text-decoration-underline">
                    View All
                  </span>
                </StyledDropdownItem>
                <div className="scroller">
                  <StyledDropdownItem href="#" className="d-flex w-100">
                    <i className=" fas fa-regular fa-table-cells-large"></i>
                    <div className="flex-grow-1 ms-4">
                      <StyledH5 className="fs-6">Justin Verduzo</StyledH5>
                      <StyledP className="text-muted  text-wrap">
                        Your task changed an issue from "in progress" to{" "}
                        <span>Review</span>
                        <br />
                        <span className="d-block">
                          <i className="clock fas fa-clock"></i> 1 Hour Ago
                        </span>
                      </StyledP>
                    </div>
                  </StyledDropdownItem>
                  <StyledDropdownItem href="#" className="d-flex w-100">
                    <i className=" fas fa-regular fa-table-cells-large"></i>
                    <div className="flex-grow-1 ms-4">
                      <StyledH5 className="fs-6">
                        New order has been placed{" "}
                      </StyledH5>
                      <StyledP className="text-muted ">
                        Open the order confirmation or shipment confirmation.{" "}
                        <br />
                        <span className="d-block">
                          <i className="clock fas fa-clock"></i> 1 Hour Ago
                        </span>
                      </StyledP>
                    </div>
                  </StyledDropdownItem>
                  {/* Divider */}
                  <Divider className="px-3 fs-6 py-1 w-100">Earlier</Divider>
                  {/* divider */}
                  <StyledDropdownItem href="#" className="d-flex w-100">
                    <i className=" fas fa-regular fa-table-cells-large"></i>
                    <div className="flex-grow-1 ms-4">
                      <StyledH5 className="fs-6">
                        Your item is shipped{" "}
                      </StyledH5>
                      <StyledP className="text-muted text-wrap">
                        Here is something that you might like to know <br />
                        <span className="d-block">
                          <i className="clock fas fa-clock"></i> 1 Day Ago
                        </span>
                      </StyledP>
                    </div>
                  </StyledDropdownItem>
                  <StyledDropdownItem href="#" className="d-flex w-100">
                    <i className=" fas fa-regular fa-table-cells-large"></i>
                    <div className="flex-grow-1 ms-4">
                      <StyledH5 className="fs-6">Selena Layfield </StyledH5>
                      <StyledP className="text-muted text-wrap">
                        Yay! Everything worked
                        <br />
                        <span className="d-block">
                          <i className="clock fas fa-clock"></i> 3 Day Ago
                        </span>
                      </StyledP>
                    </div>
                  </StyledDropdownItem>
                </div>
                <div className=" noti-more d-flex justify-content-center align-items-center px-3 py-2 w-100">
                  <i className=" fas me-2 fs-6 fa-regular text-light fa-arrow-right"></i>
                  <p className="m-0  fs-6">View more</p>
                </div>
              </StyledDropdown>
            </Division>
          </Dropdown>
        </button>

        <button className="btn-nav p-sm-2 p-0">
          <Dropdown className="d-block d-lg-block ">
            <Dropdown.Toggle id="dropdown-basic" className="btn-nav p-0">
              <img src={Profile} alt="" />
              <span className="ms-2 d-none d-sm-flex user-profile">
                <span className="user-name">Abdullah Safi</span>
                <span className="user-sub-desc">Web Developer</span>
              </span>
            </Dropdown.Toggle>

            <Division className="">
              <StyledDropdown className="profile-pop p-0">
                <StyledDropdownItem className="w-100 admin p-3 ">
                  <h5 className="fs-6 text-light mb-2 text-start m-0">
                    Abdullah Safi
                  </h5>
                  <p className="text-light m-0 text start  ">
                    abdallahsafi414@gmail.com
                  </p>
                </StyledDropdownItem>
                <div className="w-100 p-0  ">
                  <ul className=" profile-menu w-100 m-0 p-0 d-inline-block">
                    <li className="px-4 py-2 w-100">
                      <a href="#" className="list-link">
                        <i className="fas fs-6 me-2 fa-user"></i>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li className="px-4 py-2 w-100">
                      <a href="#" className="list-link">
                        <i className="fas fs-6 me-2 fa-message"></i>
                        <span>Messages</span>
                      </a>
                    </li>
                    <li className="px-4 py-2 w-100">
                      <a href="#" className="list-link">
                        <i className="fas fs-6 me-2 fa-message"></i>
                        <span>Taskboard</span>
                      </a>
                    </li>
                    <li className="px-4 py-2 w-100">
                      <a href="#" className="list-link">
                        <i className="fas fs-6 me-2 fa-message"></i>
                        <span>Help</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <span className="line d-block"></span>

                <div className="w-100 p-0  ">
                  <ul className=" profile-menu w-100 m-0 p-0 d-inline-block">
                    <li className="px-4 py-2 w-100">
                      <a href="#" className="list-link d-flex w-100">
                        <i className="fas fs-6 me-2 fa-user"></i>
                        <span className="d-flex justify-content-start align-items-center w-100">
                          Balance: <strong className="ms-2">$6974.34</strong>
                        </span>
                      </a>
                    </li>
                    <li className="px-4 py-2 w-100">
                      <a href="#" className="list-link w-100">
                        <i className="fas fs-6 me-2 fa-message"></i>
                        <span>
                          Setting <span className="new-setting">New</span>
                        </span>
                      </a>
                    </li>
                    <li className="px-4 py-2 w-100">
                      <a href="#" className="list-link">
                        <i className="fas fs-6 me-2 fa-message"></i>
                        <span>Lock screen</span>
                      </a>
                    </li>
                    <li className="px-4 py-2 w-100">
                      <a href="#" className="list-link" onClick={handleLogout}>
                        <i className="fas fs-6 me-2 fa-message"></i>
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </StyledDropdown>
            </Division>
          </Dropdown>
        </button>
      </div>
    </Navbar>
  );
}
