import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/defaultEquipment.jpg";

 const EquipmentItem = ({ name, building, location, qty, qtyUnit, img }) => (
  <div className="equipment-item">
    <div className="equipment-info-area">
      <p>{name}</p>
      <p>Qty:{qty} {qtyUnit}</p>
      <p>{building} {location}</p>
    </div>
    <img src={img || defaultImg} alt={name} height="200" width="200" className="equipment-image" />
  </div>
)

export default EquipmentItem;