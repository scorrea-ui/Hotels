import React from "react";
import DateFilter from "./filters/DateFilter";
import OptionsFilter from "./filters/OptionsFilter";

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    let payload = this.props.filters;
    payload[event.target.name] = event.target.value;
    this.props.onFilterChange(payload);
  }

  render() {
    const { country, dateFrom, dateTo, price, rooms } = this.props.filters;
    return (
      <nav className='navbar is-info' style={{ justifyContent: "center" }}>
        <div className='navbar-item'>
          <DateFilter
            onDateChange={this.handleOptionChange}
            date={dateFrom}
            name='dateFrom'
            icon='sign-in-alt'
          />
        </div>
        <div className='navbar-item'>
          <DateFilter
            onDateChange={this.handleOptionChange}
            date={dateTo}
            name='dateTo'
            icon='sign-out-alt'
          />
        </div>
        <div className='navbar-item'>
          <OptionsFilter
            name='country'
            handleOptionChange={this.handleOptionChange}
            options={[
              { value: undefined, name: "Todos los países" },
              { value: "Argentina", name: "Argentina" },
              { value: "Brasil", name: "Brasil" },
              { value: "Chile", name: "Chile" },
              { value: "Uruguay", name: "Uruguay" },
            ]}
            selected={country}
            icon='globe'
          />
        </div>
        <div className='navbar-item'>
          <OptionsFilter
            name='price'
            handleOptionChange={this.handleOptionChange}
            options={[
              { value: undefined, name: "Cualquier precio" },
              { value: 1, name: "$" },
              { value: 2, name: "$$" },
              { value: 3, name: "$$$" },
              { value: 4, name: "$$$$" },
            ]}
            selected={price}
            icon='dollar-sign'
          />
        </div>
        <div className='navbar-item'>
          <OptionsFilter
            name='rooms'
            handleOptionChange={this.handleOptionChange}
            options={[
              { value: undefined, name: "Cualquier tamaño" },
              { value: 10, name: "Hotel pequeño" },
              { value: 20, name: "Hotel mediano" },
              { value: 30, name: "Hotel grande" },
            ]}
            selected={rooms}
            icon='bed'
          />
        </div>
      </nav>
    );
  }
}

export default Filters;
