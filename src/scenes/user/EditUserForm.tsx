import { useLocation } from "react-router-dom";
import { User } from "../../types/User";
import UserForm from "./UserForm";
import { UserService } from "../../services/userService";

const EditUserPage = () => {
  const location = useLocation();
  // const service = new UserService();
  // const user = await service.getUserById(1);
  // console.log(user);

  // if (!user) {
  //   return <UserForm user={new User()} />;
  // }

  // return <UserForm user={user} />;
};

export default EditUserPage;
