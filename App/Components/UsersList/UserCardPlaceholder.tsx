import Shimmer from "react-shimmer-effect";
import { FunctionComponent, memo } from "react";
import * as React from "react";

export const UserCardPlaceholder: FunctionComponent = memo(props => {
  return (
    <Shimmer>
      <div
        style={{
          height: 300,
          width: 360,
          borderRadius: 10
        }}
      ></div>
    </Shimmer>
  );
});
