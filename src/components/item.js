import React from "react";
import PropTypes from 'prop-types';

const Item = (props) => {
  const{name,alertProduct}=props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        maxWidth:'800px',
        marginTop:'10px',
        marginBottom: "10px",
        borderBottom: "solid",
      }}
      onClick={() => alertProduct(name)}
    >
      <img
      
        style={{ width: "300px", height: "300px", marginBottom:'10px' }}
        src={props.img}
        alt=""
      />
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};


Item.defaultProps = {
    img:'', name:'still painting...', price: 'N/A'
}
Item.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    alertProduct : PropTypes.func
}
export default Item;
