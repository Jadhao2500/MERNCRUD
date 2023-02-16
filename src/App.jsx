import "./App.css";
import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import Saurabh from "./components/Saurabh";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Saurabh />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/allUsers" element={<AllUsers />} />
        <Route path="/editUsers/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
