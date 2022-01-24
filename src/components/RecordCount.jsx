import React from "react";

export function RecordCount(props) {
  if (!props.recordCount || !props.planRecordLimit) {
    return null;
  }

  return (
    <div data-testid="recordCount"  className="recordCount">
      {props.recordCount && props.planRecordLimit && (
        <p>
          {props.recordCount} records indexed out of the {props.planRecordLimit}{" "}
          alloted for your current plan
        </p>
      )}
    </div>
  );
}
