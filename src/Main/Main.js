import React, { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));

    return () => {
      console.log("salam");
    };
  }, []);

  return <div>Salam</div>;
};

export default Main;
