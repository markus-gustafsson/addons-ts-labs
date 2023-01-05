import React from 'react';
import Link from "next/link";

function NewPuppyButton() {
  return (
    <Link href={`/newPuppy`}>
      <button className={`p-3 rounded-md bg-sky-200 hover:bg-sky-100 drop-shadow-sm mb-3 self-start text-stone-900`}>
        new pup
      </button>
    </Link>
  );
}

export default NewPuppyButton;