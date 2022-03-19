import React, { useEffect, useState } from "react";

const CounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useeffect runs after every render
  // use second param to render only when coount variable changes
  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
};

export default CounterOne;
