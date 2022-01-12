import React from "react";

export function RecordCount(props) {
  return (
    <div className="recordCount">
      {props.recordCount && props.planRecordLimit && (
        <p>
          {props.recordCount} records indexed out of the {props.planRecordLimit}{" "}
          alloted for your current plan
        </p>
      )}
    </div>
  );
}
