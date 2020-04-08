import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';

class DateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event) {
    this.props.onDateChange(event);
  }

  render() {
    const { date, icon, name } = this.props;
    return (
      <div className='field'>
        <div className='control has-icons-left'>
          <input
            className='input'
            type='date'
            onChange={this.handleDateChange}
            name={name}
            defaultValue={moment(date).format("YYYY-MM-DD")}
          />
          <span className='icon is-small is-left'>
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>
      </div>
    );
  }
}

export default DateFilter;
