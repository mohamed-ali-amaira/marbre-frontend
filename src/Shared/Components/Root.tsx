import React from "react";

interface Params {
  children: JSX.Element;
}

export default function Root({ children }: Params) {
  return <div>{children}</div>;
}
