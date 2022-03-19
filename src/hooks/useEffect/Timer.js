import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <h1>Timer: {time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Timer;
