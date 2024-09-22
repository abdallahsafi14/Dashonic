import { useState } from "react";
import NavBar from "../../component/NavBar";
import SideBar from "../../component/SideBar";
import { colors } from "../../Helper/Colors";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import MyBarChart from "../../component/BarChart";
import MyLineChart from "../../component/LineChart";
import "./Home.css";
import { Link } from "react-router-dom";
import upgrade from "./Upgrade.png";
import MyPieChart from "../../component/PieChart";
import MyMixedChart from "../../component/MixedChart";
import Orders from "../../component/Orders";
import Map from "../../component/Map";
import Progress from "../../component/ProgressBar";
import MainFooter from "../../component/Main-Footer";

// styled
const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.primaryTextColor};
  padding: 100px 20px 0px;
`;
const SecondaryColor = styled.div`
  color: ${(props) => props.theme.secondaryTextColor};
  font:size:8px;
`;
const SectionWrapper = styled.div`
  background-color: ${(props) => props.theme.sectionBackgroundColor};
  border: 1px solid ${(props) => props.theme.sectionBorderColor};
  border-radius: 5px;
`;
const StyledDropdown = styled(Dropdown.Menu)`
  background-color: ${(props) => props.theme.navbarBackground};
`;
const StyledDropdownItem = styled(Dropdown.Item)`
  background-color: ${(props) => props.theme.navbarBackground};
  color: ${(props) => props.theme.sidebarTextColor} !important;
`;

const Division = styled.div`
  background-color: ${(props) => props.theme.navbarBackground} !important;
  color: ${(props) => props.theme.sidebarTextColor} !important;
`;
const TimingChart = styled(Dropdown.Toggle)`
  background-color: ${(props) => props.theme.sidebarActiveColor} !important;
  border: none;
  color: ${(props) => props.theme.secondaryTextColor} !important;
`;
const StyledProgressBar = styled(Progress)`
  background-color: ${(props) => props.theme.sidebarActiveColor} !important;
`;
const StyledFooter = styled(MainFooter)`
  color: red !important;
`;
// Bars
const UsaBar = 75;
const RussiaBar = 55;
const AustraliaBar = 85;
export default function Home() {
  // const  themes  = useContext(Themes);
  // const cookie = new Cookies();
  // const Header = styled.h1`
  // color:${(props) => props.theme.sidebarTextColor}  ;
  // background:red;
  // `
  const [toggleSidebar, setToggleSidebar] = useState(document.body.clientWidth <= 992);
  const [activeBrand, setActiveBrand] = useState(document.body.clientWidth <= 992 ? false:true);
  window.onresize = () => {
    if (document.body.clientWidth < 767) {
      setToggleSidebar(true);
      setActiveBrand(false);
    } else {
      setToggleSidebar(false);
      setActiveBrand(true);
    }
  };

  return (
    <div className="side-nav-container ">
      <SideBar
        activeBrand={activeBrand}
        setActiveBrand={setActiveBrand}
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <PageWrapper
        className=""
        style={{
          marginInlineStart: activeBrand ? "255px" : "70px",
          width: "auto",
        }}
      >
        <NavBar
          activeBrand={activeBrand}
          setActiveBrand={setActiveBrand}
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <div className="page-content">
          <div className="page-title-box d-flex justify-content-between align-items-center pb-3">
            <h4 className="m-0 fs-5">Sales Analytics</h4>
            <ul className="p-0 d-flex ">
              <li className="px-1">Dashonic</li>
              <SecondaryColor className="">
                <i className="fas px-1 fa-solid fa-angle-right"></i>
                Sales Analytics
              </SecondaryColor>
            </ul>
          </div>
          <div className=" chart-container  ">
            <SectionWrapper
              style={{ maxHeight: "300px" }}
              className="chart-wrapper  p-1 "
            >
              <div className=" bg-transparent">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="text-upper-case">Total Revenue</h6>
                      <h5 className="mt-4 fw-bold mb-2 ">$46.34k</h5>
                      <SecondaryColor>Earning this month</SecondaryColor>
                    </div>
                    <div>
                      <Dropdown className="">
                        <TimingChart id="dropdown-basic" className="drop-btn">
                          Monthly
                        </TimingChart>

                        <Division className="row ">
                          <StyledDropdown>
                            <StyledDropdownItem href="#/action-1">
                              Yearly
                            </StyledDropdownItem>
                            <StyledDropdownItem href="#/action-2">
                              Monthly
                            </StyledDropdownItem>
                            <StyledDropdownItem href="#/action-3">
                              Weekly
                            </StyledDropdownItem>
                          </StyledDropdown>
                        </Division>
                      </Dropdown>
                    </div>
                  </div>

                  <MyBarChart />
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper
              style={{ maxHeight: "300px" }}
              className="chart-wrapper  p-1"
            >
              <div className=" bg-transparent">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="text-upper-case">Total Refunds</h6>
                      <h5 className="mt-4 fw-bold mb-2 ">$895.02</h5>
                      <SecondaryColor>Refunds this month</SecondaryColor>
                    </div>
                    <div>
                      <Dropdown className="">
                        <TimingChart id="dropdown-basic" className="drop-btn">
                          Monthly
                        </TimingChart>

                        <Division className="row ">
                          <StyledDropdown>
                            <StyledDropdownItem href="#/action-1">
                              Yearly
                            </StyledDropdownItem>
                            <StyledDropdownItem href="#/action-2">
                              Monthly
                            </StyledDropdownItem>
                            <StyledDropdownItem href="#/action-3">
                              Weekly
                            </StyledDropdownItem>
                          </StyledDropdown>
                        </Division>
                      </Dropdown>
                    </div>
                  </div>

                  <MyLineChart />
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper
              style={{ maxHeight: "300px" }}
              className="chart-wrapper  p-1"
            >
              <div className=" bg-transparent">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="text-upper-case">Active users</h6>
                      <h5 className="mt-4 fw-bold mb-2 ">6.985</h5>
                      <SecondaryColor>Users this month</SecondaryColor>
                    </div>
                    <div>
                      <Dropdown className="">
                        <TimingChart id="dropdown-basic" className="drop-btn">
                          Weekly
                        </TimingChart>

                        <Division className="row ">
                          <StyledDropdown>
                            <StyledDropdownItem href="#/action-1">
                              Yearly
                            </StyledDropdownItem>
                            <StyledDropdownItem href="#/action-2">
                              Monthly
                            </StyledDropdownItem>
                            <StyledDropdownItem href="#/action-3">
                              Weekly
                            </StyledDropdownItem>
                          </StyledDropdown>
                        </Division>
                      </Dropdown>
                    </div>
                  </div>

                  <MyBarChart />
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper
              style={{ maxHeight: "300px" }}
              className="chart-wrapper  p-1"
            >
              <div className=" bg-transparent">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="text-upper-case">All time orders</h6>
                      <h5 className="mt-4 fw-bold mb-2 ">12,584</h5>
                      <SecondaryColor>Total Numbers of Orders</SecondaryColor>
                    </div>
                    <div>
                      <Dropdown className="">
                        <TimingChart id="dropdown-basic" className="drop-btn">
                          Yearly
                        </TimingChart>

                        <Division className="row ">
                          <StyledDropdown>
                            <StyledDropdownItem href="#/action-1">
                              Yearly
                            </StyledDropdownItem>
                            <StyledDropdownItem href="#/action-2">
                              Monthly
                            </StyledDropdownItem>
                            <StyledDropdownItem href="#/action-3">
                              Weekly
                            </StyledDropdownItem>
                          </StyledDropdown>
                        </Division>
                      </Dropdown>
                    </div>
                  </div>

                  <MyLineChart />
                </div>
              </div>
            </SectionWrapper>
          </div>
          <div className="second-section ">
            <SectionWrapper className="p-3 update">
              <div className="border-0 d-flex justify-content-center justify-c align-items-center alert alert-warning fade show flex-wrap text-center text-md-start">
                <i className="me-2 fa-solid fa-triangle-exclamation"></i>
                <div className="flex-grow-1 text-truncate text-wrap ">
                  Your free trial expired in <span className="fw-bold">21</span>{" "}
                  days.
                </div>
                <div className="flex-shrink-0 ">
                  <Link
                    href="#"
                    className="text-reset text-decoration-underline"
                  >
                    Upgrade
                  </Link>
                </div>
              </div>
              <div className="row align-items-center w-100">
                <div className="col-sm-7 ">
                  <p className="fs-6 fs-md-5 text-wrap">
                    Upgrade your plan from a{" "}
                    <span className="fw-bold">Free trail</span>, to 'Premium
                    Plan' <i className="fas fa-arrow-right"></i>
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-primary">
                      Upgrade Account!
                    </a>
                  </div>
                </div>

                <div className="col-sm-5 text-center">
                  <img className="img-fluid py-3  w-100" src={upgrade} alt="" />
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper className="p-3 earning">
              <div className="card-title d-flex justify-content-between align-items-center mb-4">
                <h4 className="fs-5">Earning Reports</h4>
                <div className="d-flex align-items-center">
                  Report By:{" "}
                  <Dropdown className="">
                    <TimingChart
                      id="dropdown-basic"
                      className="drop-btn bg-transparent ms-1"
                    >
                      Monthly
                    </TimingChart>

                    <Division className="row ">
                      <StyledDropdown>
                        <StyledDropdownItem href="#/action-1">
                          Yearly
                        </StyledDropdownItem>
                        <StyledDropdownItem href="#/action-2">
                          Monthly
                        </StyledDropdownItem>
                        <StyledDropdownItem href="#/action-3">
                          Weekly
                        </StyledDropdownItem>
                      </StyledDropdown>
                    </Division>
                  </Dropdown>
                </div>
              </div>
              <div className="row align-items-center w-100">
                <div className="col-sm-7  ">
                  <div className="row mb-3">
                    <div className="col-6">
                      <SecondaryColor>This Month</SecondaryColor>
                      <h5>
                        %12,582{" "}
                        <Badge bg="success" className="ms-2">
                          <small>+15%</small>
                        </Badge>
                      </h5>
                    </div>
                    <div className="col-6">
                      <SecondaryColor>Last Month</SecondaryColor>
                      <h5>%98,741 </h5>
                    </div>
                  </div>

                  <SecondaryColor className="mb-4">
                    <span className="text-success ">
                      25.2% <i className="fas fa-arrow-up"></i>
                    </span>{" "}
                    From previous period
                  </SecondaryColor>
                  <Link href="#" className="btn btn-secondary mb-2">
                    <SecondaryColor>
                      Generate Reports <i className="fas fa-arrow-right"></i>
                    </SecondaryColor>
                  </Link>
                </div>
                <div className="col-sm-5 d-flex justify-content-center">
                  <MyPieChart className="pie-chart" />
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper className="p-3 mixed">
              <div className="card-title d-flex justify-content-between align-items-center mb-4">
                <h4 className="fs-5">Sales Anylatics</h4>
                <div className="d-flex align-items-center">
                  Sort By:{" "}
                  <Dropdown className="">
                    <TimingChart
                      id="dropdown-basic"
                      className="drop-btn bg-transparent ms-1"
                    >
                      Monthly
                    </TimingChart>

                    <Division className="row ">
                      <StyledDropdown>
                        <StyledDropdownItem href="#/action-1">
                          Yearly
                        </StyledDropdownItem>
                        <StyledDropdownItem href="#/action-2">
                          Monthly
                        </StyledDropdownItem>
                        <StyledDropdownItem href="#/action-3">
                          Weekly
                        </StyledDropdownItem>
                      </StyledDropdown>
                    </Division>
                  </Dropdown>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <ul className="mixed-list flex-wrap d-flex justify-content-center align-items-center mb-3 text-center p-0 w-100">
                  <li className="d-flex align-items-end px-4">
                    <h3 className="text-primary m-0">$3.85k</h3>
                    <SecondaryColor className="fw-normal  ms-2">
                      Income
                    </SecondaryColor>
                  </li>
                  <li
                    className="d-flex align-items-end px-4 border-item-left"
                    style={{ }}
                  >
                    <h3 className="text-primary m-0">258</h3>
                    <SecondaryColor className="fw-normal  ms-2">
                      Sales
                    </SecondaryColor>
                  </li>
                  <li
                    className=" d-flex align-items-end px-4 border-item-left"
                    style={{ }}
                  >
                    <h3 className="text-primary m-0">52k</h3>
                    <SecondaryColor className="fw-normal  ms-2">
                      Users
                    </SecondaryColor>
                  </li>
                </ul>
                <div style={{   }}>
                  <MyMixedChart />
                </div>
              </div>
            </SectionWrapper>
          </div>
          <SectionWrapper className="p-3 mt-4 overflow-x-auto w-100">
            <Orders activeBrand={activeBrand} />
          </SectionWrapper>
          <SectionWrapper className="p-3 mt-4">
            <div>
              <Map />
            </div>
            <div className="pt-3 pb-2">
              <p>
                USA
                <span className="float-end">{UsaBar}%</span>
              </p>
              <div className="mt-1">
                <StyledProgressBar now={UsaBar} />
              </div>
              <p className="mt-4 mb-1">
                Russia
                <span className="float-end">{RussiaBar}%</span>
              </p>
              <div className="mt-1">
                <StyledProgressBar now={RussiaBar} />
              </div>
              <p className="mt-4 mb-1">
                Australia
                <span className="float-end">{AustraliaBar}%</span>
              </p>
              <div className="mt-1">
                <StyledProgressBar now={AustraliaBar} />
              </div>
            </div>
          </SectionWrapper>
          <StyledFooter />
        </div>
      </PageWrapper>
    </div>
  );
}
