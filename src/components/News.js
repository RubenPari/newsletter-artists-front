import React, { Component } from "react";
import "./../css/News.css";

class News extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <img src={this.props.img} alt="immagine" className="img-header" />
        </div>
        <div className="card-body">
          <h2>{this.props.title}</h2>
          <p>{this.props.artist}</p>
          <p>{this.props.releaseDate}</p>
          <a href="{this.props.link}">Listen to Spotify</a>
        </div>
      </div>
    );
  }
}

export default News;
