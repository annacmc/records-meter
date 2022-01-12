import React from "react";

export function NoticeBox(props) {
  if (!props.errors) {
    return null;
  }

  let noticeBoxClassName = props.errors[0][1]
    ? props.errors[0][1]
    : "noticeBox";

  return (
    <div className={noticeBoxClassName}>
      <p>{props.errors[0]}</p>
    </div>
  );
}

export default NoticeBox;
