import React from "react";

export function NoticeBox(props) {
  if (!props.notices) {
    return null;
  }

  let noticeBoxClassName = props.notices[0][1]
    ? props.notices[0][1]
    : "noticeBox";

  return (
    <div className={noticeBoxClassName}>
      <p>{props.notices[0]}</p>
    </div>
  );
}

export default NoticeBox;
