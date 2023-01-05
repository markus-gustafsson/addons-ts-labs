import React from 'react';
import Link from "next/link";
import NewPuppyButton from "./NewPuppyButton";

const Header = () => {
  return (
    <Link href={'/'}>
      <header className={`m-5 flex`}>
        <h1 className={`text-4xl font-bold text-stone-900`}>PUPPIES</h1>
      </header>
    </Link>
  );
};

export default Header;