import React from 'react';
import {IPuppyInfo} from "../app/(interfaces)/IPuppyInfo";
import Link from "next/link";

const PuppyListItem = (puppy: IPuppyInfo) => {
  return (
    <Link href={`/puppies/${puppy.id}`}>
      <div className={`flex flex-row rounded-full bg-gray-700 w-almost-full p-3 mt-2 mb-2 hover:bg-gray-600`}>
        <h3 className={`text-sky-100`}>{puppy.name},&nbsp;</h3>
        <h3 className={`text-sky-100`}>{puppy.breed}</h3>
      </div>
    </Link>
  );
};

export default PuppyListItem;