import React from "react";

export default function FormatedTime(props) {
  let currentTime = `${props.time.getHours()}:${props.time.getMinutes()}`;
  return <div>{currentTime}</div>;
}
