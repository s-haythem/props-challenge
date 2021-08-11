import React from "react";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", maxWidth:'800px', borderBottom:'solid' }}>
      <p style={{width:'400px'}}>Photo</p>
      <p style={{width:'100px'}}>Name</p>
      <p style={{width:'100px'}}>Price</p>
    </div>
  );
};

export default Header;
