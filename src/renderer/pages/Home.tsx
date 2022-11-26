import React from 'react';

const Home = () => {
  const [count, useState] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          useState((prev) => prev + 1);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Home;
