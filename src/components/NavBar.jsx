import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: black;
`;

const Tab = styled(NavLink)`
  font-size: 25px;
  margin-right: 25px;
  color: white;
  text-decoration: none;
`;
const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tab to="/">Saurabh</Tab>
        <Tab to="/allUsers">All Users</Tab>
        <Tab to="/addUser">Add Users</Tab>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
