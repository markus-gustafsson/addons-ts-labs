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
    <button onClick={handleClick}>
      Delete puppy
    </button>
  );
}

export default DeletePuppyButton;