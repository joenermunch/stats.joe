import React, {Component} from "react";
import axios from "axios";
import "./style.css";
import html2canvas from "html2canvas";
import canvasToImage from "canvas-to-image";

export class App extends Component {
  state = {
    username: null,
    images: null,
    stats: null,
    loading: false,
    download: false,
    tweet: null
  };

  callAPI = async e => {
    e.preventDefault();
    this.setState({loading: true});
    const response = await axios.post("/api/data", {
      username: this.state.username
    });

    const mappedImages = response.data.topalbums.album.map(album => {
      return album.image[2]["#text"];
    });

    const mappedStats = response.data.topalbums.album.map(album => {
      return {
        artist: album.artist.name,
        album: album.name,
        playcount: album.playcount,
        image: album.image[2]["#text"]
      };
    });

    this.setState({
      images: mappedImages,
      stats: mappedStats,
      loading: false,
      download: true
    });

    const mappedArtists = this.state.stats.map(artist => {
      return `${artist.artist} (${artist.playcount})`;
    });

    this.setState({
      tweet: mappedArtists.join(`, `)
    });
  };

  makeImage = async () => {
    await html2canvas(document.querySelector("#capture"), {
      allowTaint: true,
      useCORS: true,
      scrollX: 0,
      scrollY: 0
    }).then(canvas => {
      var a = document.createElement("a");

      a.href = canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      a.download = "mytopalbums.jpg";
      a.click();
    });
  };

  renderDownload = () => {
    if (this.state.download === true) {
      return (
        <button className="download-button" onClick={this.makeImage}>
          Download
        </button>
      );
    } else return <></>;
  };

  renderImages = () => {
    if (this.state.stats) {
      return this.state.stats.map(artist => {
        return (
          <div
            style={{background: `url(${artist.image})`}}
            key={artist.image}
            className="image-item"
          >
            <div className="stats">
              <p>{artist.artist}</p>
              <p className="album">{artist.album}</p>
              <p className="plays">{artist.playcount} plays</p>
            </div>
          </div>
        );
      });
    } else return <></>;
  };

  renderTopText = () => {
    if (this.state.stats) {
      return (
        <div className="text-container">
          My top artists of the week: {this.state.tweet} #stats.joe
        </div>
      );
    } else return <></>;
  };

  renderTweet = () => {
    if (this.state.stats) {
      window.twttr = (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };

        return t;
      })(document, "script", "twitter-wjs");

      return (
        <a
          class="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=My top artists of the week: ${this.state.tweet} #joe.io`}
        >
          Tweet
        </a>
      );
    } else return <></>;
  };

  renderLoading = () => {
    if (this.state.loading === true) {
      return <p className="loading">Loading...</p>;
    } else return this.renderDownload();
  };

  render() {
    return (
      <div className="main-container">
        <header>
          <form onSubmit={e => this.callAPI(e)}>
            <h1 className="title">stats.joe</h1>
            <input
              placeholder="Last.FM username"
              type="text"
              onChange={e => this.setState({username: e.target.value})}
            />
            <button className="submit-button" onClick={this.callAPI}>
              Generate collage
            </button>
            <div className="result">{this.renderLoading()}</div>
          </form>
        </header>
        <div className="image-main">
          <div className="image-container">
            <div className="image-box" id="capture">
              {this.renderImages()}
            </div>
            <div className="text-tweet">
              {this.renderTopText()}
              {this.renderTweet()}
            </div>
          </div>
        </div>
        <footer className="header-footer">
          <p className="footer-text">
            made with <span className="heart">❤️</span> and React by{" "}
            <a
              className="github"
              target="_BLANK"
              href="https://github.com/joenermunch"
            >
              joener münch
            </a>
          </p>
          <p>
            <a
              className="source"
              target="_BLANK"
              href="https://github.com/joenermunch/stats.joe"
            >
              source code
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
