import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OptionsFilter = (props) => {
  const { icon, selected, options, handleOptionChange, name } = props;
  return (
    <div className='field'>
      <div className='control has-icons-left'>
        <div className='select' style={{ width: "100%" }}>
          <select
            style={{ width: "100%" }}
            value={selected}
            onChange={handleOptionChange}
            name={name}
          >
            {options.map((option) => {
              return (
                <option value={option.value} key={option.name}>
                  {option.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className='icon is-small is-left'>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </div>
  );
};

export default OptionsFilter;
