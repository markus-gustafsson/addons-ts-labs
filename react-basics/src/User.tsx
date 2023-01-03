import React, {FC} from 'react';
import {IUserInfo} from "./IUserInfo";

const User:FC<IUserInfo> = (props) => {

  return (
    <div className={"flex-col w-fit h-fit"}>
      <h2 className={"font-bold"}>
        {`Name: ${props.name} `}
      </h2>
      <h2 className={"font-extralight"}>
        {`Age: ${props.age}`}
      </h2>
      <h2>
        {`Address: ${props.address}`}
      </h2>
    </div>
  );
}

export default User;