import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', { 'day-list__item--selected': props.selected, 'day-list__item--full': !props.spots });
  const formatSpots = () => !props.spots ? 'no spots remaining' : props.spots === 1 ? '1 spot remaining' : `${props.spots} spots remaining`;
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}