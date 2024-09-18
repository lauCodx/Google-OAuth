import React from "react";
import LogoutButton from "./LogoutButton";

interface User {
  profilePicture: string;
  displayName:string;
  email:string;
}


function Profile({ user }: { user: User }) {
    console.log(user.profilePicture)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg text-center p-6">
        <img
          src={user.profilePicture}
          className="w-24 h-24 rounded-full mx-auto mt-4"
          alt=""
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-x1 mb-2">{user.displayName}</div>
        <div className="text-white-700 text-base">{user.email}</div>
      </div>

      <LogoutButton/>
    </div>
  );
}

export default Profile;
