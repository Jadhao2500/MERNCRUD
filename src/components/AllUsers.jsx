import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../service/api";

const AllUsers = () => {
  const [users, allUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      let res = await getUsers();
      allUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
  };
  // console.log(users);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((el) => (
          <TableRow>
            <TableCell>{el.name}</TableCell>
            <TableCell>{el.username}</TableCell>
            <TableCell>{el.email}</TableCell>
            <TableCell>{el.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/editUsers/${el._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={() => deleteUserDetails(el._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
