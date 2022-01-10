

// Handle users who are currently over their record limitIf a user has paid for a 1000 record tier, 
// and they currently have 1200 records, then:

// the chart should not melt/explode and still display the correct breakdown
// we should show the user a nudge that they'll be upgraded for their next billing cycle


// Handle users who don't have any records at all 

// For users who don't have any records at all (but indexing is completed), 
// we could either show an empty bar or a custom message.

// In any case, let's make sure the chart still renders correctly when no data is provided.

// Handle a site that hasn't been indexed yet

// If there's no indexing date and no records, the site probably hasn't been indexed yet 
// and we should show different messaging to the user indicating that they should wait for indexing to complete.

import React from "react";

export function NoticeBox(props) {
  return (
    <div>
      {props.errors && (
            <div className = {props.className}> 
        <p>
          {props.errors[0]}
        </p>
        </div>
      )}
    </div>
  );
}
