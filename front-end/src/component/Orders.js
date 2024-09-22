import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import "./Orders.css";
import Cookies from "universal-cookie";

// style

const StyledTable = styled(DataTable)`
background-color:${(props) => props.theme.sectionBackgroundColor}
width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    overflow-x: auto;
  }

  // Responsive column styles
  .rdt_Table {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rdt_TableHead, .rdt_TableHeadRow, .rdt_TableHeader {
    flex: 0 0 auto;
    white-space: nowrap;
    width: 100%;
  }

  .rdt_TableBody {
    width: 100%;
  }

  .rdt_TableRow {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  // .rdt_TableCell {
  //   flex: 1 0 auto;
  // }

  // // Optional: Hide columns on smaller screens
  // .rdt_TableCell:nth-child(4) {
  //   display: none; // Hide the 4th column on smaller screens
  // }

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
const ActiveDiv = styled.div`
  background-color: ${(props) => props.theme.sidebarActiveColor} !important;
  color: ${(props) => props.theme.sidebarTextColor} !important;
`;
const StyledIcon = styled.i`
  color: ${(props) => props.theme.primaryTextColor} !important;
`;

const Orders = (props) => {
  const cookie = new Cookies();
  //  cookie.set("DARK",true)

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      style: {
        fontWeight: "bold",
        color: cookie.get("DARK") ? "white" : "black",
      },
    },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "City", selector: (row) => row.address.city, sortable: true },
  ];

  const handleFilter = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredResults = data.filter(
      (item) =>
        item.id.toString().includes(keyword) ||
        item.name.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword) ||
        item.address.city.toLowerCase().includes(keyword)
    );
    setFilteredData(filteredResults);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // state
  const [searchVis, setSearch] = useState(false);
  return (
    <div>
      <div className="card-title d-flex justify-content-between align-items-center mb-4">
        <h4 className="fs-5">Orders</h4>

        <div className="d-flex align-items-center">
          <button className="btn-search position-relative">
            <StyledIcon
              onClick={() => setSearch((prev) => !prev)}
              className="fas fa-light fa-magnifying-glass "
            />
            {searchVis && (
              <Division className=" floating-search px-2 py-2">
                <ActiveDiv className="px-2 w-100 d-flex justify-content-center align-items-center">
                  <i className="fas   fs-6 fa-light fa-magnifying-glass"></i>
                  <input
                    className="table-search"
                    type="text"
                    placeholder="Search..."
                    onChange={handleFilter}
                  />
                </ActiveDiv>
              </Division>
            )}
          </button>
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

      <StyledTable
        columns={columns}
        data={filteredData}
        selectableRows
        style={{ backgroundColor: "rgba(0, 255, 255, 0.3) !important", overflowX:"auto" }}
      />
    </div>
  );
};

export default Orders;
