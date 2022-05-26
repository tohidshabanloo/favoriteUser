import { HeartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./Panel.css";

const Panel = () => {
  const [user, setUser] = useState([]);
  const [fav, setFav] = useState([]);

  const heartHandler = (id) => {
    const value = user.filter((item) => item.id === id);
    setFav(...fav, value);
    console.log(value);
  };
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));

    return () => {};
  }, []);

  return (
    <>
      <div className="panel">
        {user.map((user) => (
          <div className="person" key={user.id}>
            {user.id}
            <HeartOutlined
              key={user.id}
              onClick={heartHandler}
              className="heart"
            />
            <div className="namesec">
              <span className="name">Name: </span>
              <span>{user.name}</span>
            </div>
            <div className="surnamesec">
              <span className="surname">Surname: </span>
              <span>{user.username}</span>
            </div>
          </div>
        ))}
      </div>
      <div>{fav}</div>
    </>
  );
};

export default Panel;
