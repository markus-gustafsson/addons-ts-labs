import React, {FC, useEffect, useState} from 'react';
import {IUserInfo} from "./IUserInfo";

const App = () => {

  const [user, setUser] = useState<IUserInfo>({
    name: '',
    age: 0,
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = e.currentTarget.value
    setUser({ ...user, name: value })
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      const user = data.results[0];

      setUser(prev => {
        return {
          ...prev,
          name: user.name.first,
          age: user.dob.age,
          address: user.location.street.name,
        };
      });
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.address}</h2>
    </div>
  );
}

export default App;
