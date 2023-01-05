import React from 'react';
import Link from "next/link";

function NewPuppyButton() {
  return (
    <Link href={`/newPuppy`}>
      <div className={`flex flex-row border-none w-fit h-12 items-center text-sky-100 -mt-6 hover:text-sky-300`}>
        <span>
          <span className={`text-5xl`}>+</span><span className={`text-xs`}>add new pup</span>
        </span>
      </div>
    </Link>
  );
}

export default NewPuppyButton;