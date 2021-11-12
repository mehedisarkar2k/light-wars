import React from "react";
import useAuth from "../../../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className=" flex min-h-screen items-center justify-center">
      <div className="-mt-32 text-center flex-col flex items-center justify-center space-y-4">
        <img className="h-20 w-20 rounded-full" src={user?.photoURL} alt="" />
        <h2 className="text-3xl">Hello, {user?.displayName}</h2>
      </div>
    </div>
  );
};

export default UserProfile;
