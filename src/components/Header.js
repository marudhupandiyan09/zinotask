import React, { useState } from "react";
import "../css/headerComp.css";

//// next functionality is is the json data to be displayed on the alert box when the button is clicked

const Header = ({ blocks }) => {
  // console.log("block", JSON.stringify(blocks));
  const [showData, setShowData] = useState(false);

  const viewJson = () => {
    setShowData(true);
    alert(JSON.stringify(blocks));
  };

  return (
    <div className="navbar">
      <div>
        <h1>Zino Task</h1>
      </div>
      <div>
        <button onClick={viewJson}>View Json</button>
      </div>
    </div>
  );
};

export default Header;
