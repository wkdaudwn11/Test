import React, { useEffect, useState } from "react";

const App = () => {
  const [pending, setPending] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      handleClick(1);
    }, 2000);
  }, []);

  const handleClick = (val) => {
    let url = "http://localhost:4000/api";
    if (window.location.host.indexOf("localhost") === -1) {
      const { host } = window.location;
      url = `${host}:4000/api`;
      console.log(url);
    }
    let routing = "test";
    if (val === 2) {
      routing = "test2";
    } else if (val === 3) {
      routing = "test3";
    }
    url = `${url}/${routing}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      // .then(response => console.log("response"))
      .then((response) => response.json())
      .then((response) => {
        setPending(false);
        setData(JSON.stringify(response));
      });
  };

  if (pending) return <div>Loading...</div>;
  return (
    <div>
      {data}
      <br />
      <button onClick={() => handleClick(1)}>test1</button>
      <button onClick={() => handleClick(2)}>test2</button>
      <button onClick={() => handleClick(3)}>test3</button>
    </div>
  );
};

export default App;
