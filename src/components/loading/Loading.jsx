import React from "react";

export default function Loading() {
  return (
    <div>
      <PropagateLoader
        color="#00c194"
        cssOverride={{}}
        loading
        size={16}
        speedMultiplier={1}
      />
    </div>
  );
}
