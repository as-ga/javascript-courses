import React from "react";
import { useDispacth } from "react-redux";
import authSlice from "../../appwrite/config";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispacth();

  const logoutHandler = () => {
    authSlice
      .logout()
      .then(() => dispatch(logout()))
      .catch((error) => console.error(error));
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
