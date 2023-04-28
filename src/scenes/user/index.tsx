import { Box } from "@mui/material";
import Header from "../../components/Header";
import { testUser } from "../../types/User";
import UserForm from "./UserForm";

const User = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      {/* <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="USER" subtitle="Welcome to your profile" />
      </Box> */}
      <UserForm user={testUser}></UserForm>
    </Box>
  );
};

export default User;
