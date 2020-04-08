import React from "react";
import moment from 'moment';

const Hero = props => {
  const { country, dateFrom, dateTo, price, rooms } = props.filters;
  return (
    <section className='hero is-primary'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>Hoteles</h1>
          <h2 className='subtitle'>
            desde el <strong>{moment(dateFrom).format("DD/MM/YYYY")}</strong> hasta el{" "}
            <strong>{moment(dateTo).format("DD/MM/YYYY")}</strong> en {country ? country : ''} por {" "}
            {price ? price : ''} de hasta {rooms ? rooms : ''} habitaciones.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
