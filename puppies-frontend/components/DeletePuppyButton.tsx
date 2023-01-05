'use client';

import React from 'react';

function DeletePuppyButton(props: any) {

  function handleClick(event: any) {
    event.preventDefault();
    fetch(`http://localhost:8080/api/puppies/${props.id}`, {
      method: 'DELETE'
    }).catch((error) => {
      console.error('Error: ', error);
    });
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-red-400 hover:bg-red-300 w-almost-full mt-10 p-3 rounded-md`}
    >
      Delete puppy
    </button>
  );
}

export default DeletePuppyButton;