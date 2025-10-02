import styled from "styled-components";


const SongStyle=styled.div`
.songs-list{
  background-color: red;
}
.song-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

.song-card:hover {
  background-color: #f0f0f0;
}

.song-info {
  flex: 1;
}

.song-title {
  margin: 0 0 5px 0;
  color: #333;
  font-size: 1.2em;
}

.song-artist {
  margin: 0 0 5px 0;
  color: #666;
  font-size: 1em;
}

.song-duration, .song-genre {
  color: #888;
  font-size: 0.9em;
}

.add-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #0056b3;
}

.add-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

`
export {
    SongStyle
}