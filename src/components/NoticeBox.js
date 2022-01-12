import React from "react";

export function NoticeBox(props) {
  if ( ! props.errors ) {
    return null;
  }

  return (
    <div className={ props.className }> 
        <p>
          {props.errors[0]}
        </p>
    </div>
  );
}

export default NoticeBox;
