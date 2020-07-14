import React from "react";
import Child from "child";
import Mother from "mother";

const Parent = (props) => {
  return (
    <div>
    <Child {...props} />
    <Mother {...props} />
    </div>
  );
};

export default Parent;
