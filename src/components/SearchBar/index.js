import React, { useState } from "react";
import "./style.css";

function SearchBar({ onSearch }) {
  
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (search && search.trim()) {
      onSearch(search.trim());
    }
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Artista</label>
        <input
          type="text"
          placeholder="ColdPlay"
          value={search} 
          onChange={onChangeInput}
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}

export default SearchBar;