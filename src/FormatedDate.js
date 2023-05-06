import React from "react";

export default function FormatedDate(props) {
  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let month = props.date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let year = props.date.getFullYear();
  let todayDate = `${date}.${month}.${year}`;

  return <div>{todayDate}</div>;
}
