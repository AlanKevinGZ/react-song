
import React from "react";

export default function ErrorMessage({ msgError, onRetry }) {
  return (
    <div>
      <h2>{msgError}</h2>
      <button onClick={onRetry}>Volver a Cargar</button>
    </div>
  );
}
