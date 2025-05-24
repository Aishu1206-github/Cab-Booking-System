import React from "react";
import Profile from "./Profile/Profile";
import Account from "./Account/Account";
import Payment from "./Payment/Payment";

export default function Drawer() {
  return (
    <div>
      <Profile />
      <Account />
      <Payment />
    </div>
  );
}
