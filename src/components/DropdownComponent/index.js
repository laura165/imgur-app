import React from "react";
import { useState } from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropDown({ options, selectedOption, onOptionChange }) {
  const [isOpen, setIsOpen] = useState(false);
  // functions that handles toggling between states to close/open the dropdown
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClicked = (option) => () => {
    setIsOpen(false);
    onOptionChange(option);
  };
  return (
    <div className={`${style.dropDownWrapper}`}>
      <div className={style.container}>
        <div className={`${style.dropDownHeader}`} onClick={toggleOptions}>
          {selectedOption.name}
          <FontAwesomeIcon icon="chevron-down" className={style.iconsStyle} />
        </div>
        {isOpen && (
          <div className={`${style.listContainer}`}>
            <div className={`${style.list}`}>
              {options.map((option) => (
                <div
                  className={`${style.listItem}`}
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
