import React, { useState } from "react";
import { FormStyle } from "./styles";


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
      <FormStyle onSubmit={onSubmit}>
        <label>Artista</label>
        <input
          type="text"
          placeholder="ColdPlay"
          value={search} 
          onChange={onChangeInput}
        />
        <input type="submit" value="Buscar" />
      </FormStyle>
    </div>
  );
}

export default SearchBar;