import React from "react";
import Hero from "./components/Hero";
import { today, hotelsData } from "./data/data";
import "./scss/app.scss";
import Hotels from "./components/Hotels/Hotels";
import Filters from "./components/Filters";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        dateFrom: moment(today).format("YYYY-MM-DD"),
        dateTo: moment(new Date(today.valueOf() + 86400000)).format(
          "YYYY-MM-DD"
        ),
        country: "Todos los países",
        price: 0,
        rooms: 0,
      },
      hotels: hotelsData,
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFilteredData = this.handleFilteredData.bind(this);
  }

  handleFilterChange(payload) {
    try {
      this.setState({
        filters: payload,
      });

      this.handleFilteredData();
    } catch (e) {
      console.warn(e.message);
    }
  }

  handleFilteredData() {
    const hotels = [...hotelsData];
    const { dateFrom, dateTo, country, price, rooms } = this.state.filters;

    const filteredHotels = hotels.filter((hotel) => {
      const dateFromString = moment(hotel.availabilityFrom).format(
        "YYYY-MM-DD"
      );
      const dateToString = moment(hotel.availabilityTo).format("YYYY-MM-DD");
      const testCountry =
        hotel.country === country || country === "Todos los países";
      const testDates = dateFromString === dateFrom && dateToString <= dateTo;
      const testPrices = hotel.price === parseInt(price) || price === 0;
      const testRooms = hotel.rooms <= parseInt(rooms) || rooms === 0;

      if (testCountry && testDates && testPrices && testRooms) {
        return hotel;
      }
    });

    this.setState({
      hotels: filteredHotels,
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
