import React from "react";
import "./../css/App.css";
import News from "../components/News";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  /**
   * get news from API
   * based on time range selected
   */
  async getNews() {
    const timeRange = document.getElementById("time").value;

    // set header with CORS disabled
    const opt = {
      headers: {
        mode: "no-cors",
      },
    };

    return await fetch(
      process.env.REACT_APP_BASE_URL + "/news/one-" + timeRange,
      opt
    );
  }

  componentDidMount() {
    // fetch news from API and set state
    this.getNews().then((response) => {
      response.json().then((data) => {
        this.setState({
          news: data,
        });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Newsletter Artist</h1>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="time">Choose a time range</label>

              <select name="time" id="time">
                <option value="day" defaultValue={true}>
                  1 day
                </option>
                <option value="week">1 week</option>
                <option value="month">1 month</option>
                <option value="year">1 year</option>
              </select>

              {this.state.news.map((news) => (
                <News
                  key={news.id}
                  img={news.image[0].url}
                  title={news.name}
                  artist={news.artist[0].name}
                  releaseDate={news.release_date}
                  link={news.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
