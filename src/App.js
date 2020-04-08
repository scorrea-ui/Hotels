import React from "react";
import Hero from "./components/Hero";
import { today, hotelsData } from "./data/data";
import "./scss/app.scss";
import Hotels from "./components/Hotels/Hotels";
import Filters from "./components/Filters";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        dateFrom: today,
        dateTo: new Date(today.valueOf() + 86400000),
        country: "",
        price: "",
        rooms: "",
      },
      hotels: hotelsData
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(payload) {
    this.setState({
      filters: payload,
    });
  }

  render() {
    return (
      <div className='App'>
        <Hero filters={this.state.filters} />
        <Filters
          filters={this.state.filters}
          onFilterChange={this.handleFilterChange}
        />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
