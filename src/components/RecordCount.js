import React from "react";

export function RecordCount(props) {
    return ( <p>{props.recordCount} records indexed out of the {props.planRecordLimit} alloted for your current plan</p>);
}
