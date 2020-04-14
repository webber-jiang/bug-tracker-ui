import React from "react";

const hello = "123";

function add(a, b) {
  return a + b;
}

const App = () => {
  return (
    <>
      <div>{hello}</div>
      <div>{add(2, 4)}</div>
    </>
  );
};

export default App;
