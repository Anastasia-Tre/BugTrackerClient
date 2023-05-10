import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { UserService } from "../../services/userService";
import { testUser, User } from "../../types/User";
import { USER } from "../../navigation/CONSTANTS";
import UserForm from "./UserForm";
import ReactDOM from "react-dom";

const UserProfile = () => {
  const [user, setUser] = useState<User>(new User());
  const service = new UserService();

  useEffect(() => {
    async function loadData() {
      try {
        const data = await service.getUserById(1);
        setUser(data);
        console.log(data);
      } catch (e) {
        console.log("Error in load data for user" + e);
      }
    }
    loadData();
  }, []);

  return (
    <Box m="20px">
      <UserForm user={testUser}></UserForm>
    </Box>
  );
};

export default UserProfile;
