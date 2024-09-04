import React from "react";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const user = useSelector((store) => store.user);
  return (
    <div>
      <div className="h-20 w-12 p-6">
        <ul>
          <li className="text-white">Account</li>
          <li className="text-white">Sign Out</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
