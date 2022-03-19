import React, { useState, useEffect } from "react";

const Mouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      Hooks X -{x} Y - {y}
    </div>
  );
};

export default Mouse;
