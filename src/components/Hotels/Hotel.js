import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Hotel extends React.Component {
  render() {
    const {
      availabilityFrom,
      availabilityTo,
      city,
      country,
      description,
      name,
      photo,
      price,
      rooms,
    } = this.props.hotel;
    return (
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img src={`${process.env.PUBLIC_URL}${photo}`} alt={name} />
          </figure>
        </div>
        <div className='card-content'>
          <p className='title is-4'>{name}</p>
          <p>{description}</p>
          <div
            className='field is-grouped is-grouped-multiline'
            style={{ marginTop: "1em" }}
          >
            <div className='control'>
              <div className='tags has-addons'>
                <span className='tag is-medium is-info'>
                  <FontAwesomeIcon icon='map-marker' />
                </span>
                <span className='tag is-medium'>
                  {city}, {country}
                </span>
              </div>
            </div>
            <div className='control'>
              <div className='tags has-addons'>
                <span className='tag is-medium is-info'>
                  <FontAwesomeIcon icon='bed' />
                </span>
                <span className='tag is-medium'>{rooms}</span>
              </div>
            </div>
            <div className='control'>
              <div className='tags'>
                <span className='tag is-medium is-info'>
                  {price}
                  {[...Array(price)].map((element, i) => (
                    <FontAwesomeIcon icon='dollar-sign' key={i} />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <a
            href='/'
            className='card-footer-item has-background-primary has-text-white has-text-weight-bold'
          >
            Reservar
          </a>
        </div>
      </div>
    );
  }
}

export default Hotel;
