import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormStyle } from "./styles";
import { fetchSongs } from "../../redux/slices/searchSlice";


function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.search);

  const onSubmit = (e) => {
    e.preventDefault();

    if (search && search.trim()) {
      // Construimos la URL usando TheAudioDB como antes
      const apiUrl = `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(
        search.trim()
      )}`;

      dispatch(fetchSongs(apiUrl));
    }
  };

  const onChangeInput = (e) => {
    setSearch(e.target.value);
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

      {/* Mostrar estado de carga */}
      {loading && <p>Cargando resultados...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SearchBar;
