
import React from "react";
import Header from "./components/header";
import Item from "./components/item";

function App() {
  const handleName = (name) => alert(` Hello this is ${name}`);
  return (
    <div
      style={{
        margin:'auto',
        maxWidth: "800px",
        boxSizing: "border-box",
        backgroundColor:'floralwhite'
      }}
    >
      <Header />
      <Item img={"./tab1.jpg"} name="Paris" price= '100$' handleName={handleName} />
      <Item img={"./tab2.jpg"} name="Piano" price='200$' handleName={handleName} />
      <Item img={"./tab3.jpg"} name="Tunisia" price='300$' handleName={handleName} />
      <Item/>
    </div>
  );
}

export default App;
