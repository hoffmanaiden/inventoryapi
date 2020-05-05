import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEquipment } from "../store/actions/equipment";
import EquipmentItem from "../components/EquipmentItem";

class EquipmentList extends Component {
  componentDidMount() {
    this.props.fetchEquipment();
  }

  render() {
    const { items } = this.props;
    const searchTerm = "";
    const handleChange = e =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    let equipmentList = items.map(item => (
      <EquipmentItem
        key={item._id}
        name={item.name}
        building={item.building}
        location={item.location}
        qty={item.qty}
        qtyUnit={item.qtyUnit}
        img={item.img}
      />
    ));
    return (
      <div>
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} className="search-bar" />
        {equipmentList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps, { fetchEquipment })(EquipmentList);