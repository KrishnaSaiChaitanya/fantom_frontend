import React from "react";

function Breadcrumb(props) {
  return (
    <div>
      <div class="breadcrumb-area">
        <div class="container">
          <div class="breadcrumb-content">
            <h2>{props.name}</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active">{props.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
