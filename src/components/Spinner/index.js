import React from "react";
import { SpinnerStyle } from "./styles";

function Spinner() {
  return (
    <SpinnerStyle>
      <div className="container">
        <span class="loader"></span>
        <p>Cargando...</p>
      </div>
    </SpinnerStyle>
  );
}

export default Spinner;
