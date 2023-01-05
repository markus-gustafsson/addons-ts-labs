import React from 'react';
import {IPuppyInfo} from "../app/(interfaces)/IPuppyInfo";
import Link from "next/link";

const PuppyListItem = (puppy: IPuppyInfo) => {
  return (
    <Link href={`/puppies/${puppy.id}`}>
      <div className={`flex flex-row rounded-lg bg-stone-100 drop-shadow-md w-almost-full p-3 mt-3 mb-2 hover:bg-stone-200 justify-center text-lg`}>
        <h3 className={`text-stone-900 font-bold`}>{puppy.name},&nbsp;</h3>
        <h3 className={`text-stone-800`}>{puppy.breed}</h3>
      </div>
    </Link>
  );
};

export default PuppyListItem;