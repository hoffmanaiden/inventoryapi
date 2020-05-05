import React from "react";
import EquipmentHome from "./EquipmentHome";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div>Please Sign in</div>
    )
  }
  return (
    <div>
      <EquipmentHome />
    </div>
  )
}

export default Homepage;