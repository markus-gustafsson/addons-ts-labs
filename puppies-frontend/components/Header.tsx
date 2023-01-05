import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <Link href={'/'}>
      <header className={`m-5`}>
        <h1 className={`text-4xl font-bold text-sky-100`}>PUPPIES</h1>
      </header>
    </Link>
  );
};

export default Header;