import React, { useState } from "react";

function ProductListScreen() {
  const [countDiv, setCountDiv] = useState(0);
  const [children, setChildren] = useState([]);

  const addInput = () => {
    const line = document.createElement("div");
    line.setAttribute("id", `line-input-${countDiv}`);
    line.classList.add("row");

    const colDiv = document.createElement("div");
    colDiv.classList.add("col-sm-2");

    const input = document.createElement("input");
    input.classList.add(`name-input-${countDiv}`);
    colDiv.appendChild(input);

    line.appendChild(colDiv);

    const colDiv2 = document.createElement("div");
    colDiv2.classList.add("col-sm-2");

    const input2 = document.createElement("input");
    input2.classList.add(`email-input-${countDiv}`);
    colDiv2.appendChild(input2);

    line.appendChild(colDiv2);

    const colDiv3 = document.createElement("div");
    colDiv3.classList.add("col-sm-2");

    const input3 = document.createElement("input");
    input3.classList.add(`car-input-${countDiv}`);
    colDiv3.appendChild(input3);

    line.appendChild(colDiv3);

    const colDiv4 = document.createElement("div");
    colDiv4.classList.add("col-sm-2");

    const input4 = document.createElement("input");
    input4.classList.add(`ruc-input-${countDiv}`);
    colDiv4.appendChild(input4);

    line.appendChild(colDiv4);

    document.getElementById("list-div").appendChild(line);
    setCountDiv(countDiv + 1);
  };

  return (
    <div>
      <h3>Product List Screen</h3>
      <div>
        <button type="button" onClick={addInput}>
          Add line
        </button>
        <div id="list-div">
          <div className="row">
            <div className="col-sm-2">
              <input id="name-input-10"></input>
            </div>
            <div className="col-sm-2">
              <input id="email-input-10"></input>
            </div>
            <div className="col-sm-2">
              <input id="car-input-10"></input>
            </div>
            <div className="col-sm-2">
              <input id="ruc-input-10"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListScreen;
