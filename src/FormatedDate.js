import React from "react";

export default function FormatedDate(props) {
  let todayDate = `${props.date.getDate()}.${
    props.date.getMonth() + 1
  }.${props.date.getFullYear()}`;

  return <div>{todayDate}</div>;
}
