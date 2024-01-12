import React from "react";
import { SSubscribeHeader } from "./subscribe-header.styles";

function SubscribeHeader() {
  return (
    <SSubscribeHeader>
      <div className="subscribe-info-text">
        <h2 className="subscribe-header-title">Create plan</h2>
        <p className="subscribe-header-description">
          Coffee the way you wanted it to be. For coffee delivered tomorrow, or
          next week. For whatever brew method you use. For choice, for
          convenience, for quality.
        </p>
      </div>
    </SSubscribeHeader>
  );
}

export default SubscribeHeader;
