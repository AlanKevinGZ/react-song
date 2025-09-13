import React, { Component } from "react";
import "./Song.css";

class Song extends Component {
  constructor(props) {
    super(props);
    
  }

 
  componentWillUnmount() {
    console.log("App inicializada");
  }

  render() {
    return (
      <div className="song-card">
        <div className="song">
          <div className="title">
            <h2>{this.props.song.titleSong}</h2>
          </div>
          <div className="info-song">
            <p>Artista: {this.props.song.artist}</p>
            <p>Duración: {this.props.song.duration}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Song;
