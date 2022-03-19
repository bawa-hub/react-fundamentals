import React from "react";
import CounterOne from "./CounterOne";
import MouseContainer from "./MouseContainer";
import IntervalCounter from "./IntervalCounter";
import DataFetching from "./DataFetching";
import DataFetchingTwo from "./DataFetchingTwo";
import Timer from "./Timer";

const UseEffect = () => {
  return (
    <div>
      <h1>UseEffect</h1>
      <Timer />
      <CounterOne />
      <MouseContainer />
      <IntervalCounter />
      <DataFetching />
      <DataFetchingTwo />
    </div>
  );
};

export default UseEffect;
