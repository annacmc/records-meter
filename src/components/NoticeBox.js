import React from "react";

export function NoticeBox(props) {
  if (props.errors.length == 0) {
    return null;
  }

  return (
    <div className={props.className}>
      {props.errors && <p>{props.errors[0]}</p>}
    </div>
  );
}

export default NoticeBox;
