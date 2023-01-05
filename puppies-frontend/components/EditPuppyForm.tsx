'use client';

import React, {useState} from 'react';
import {IPuppyInfo} from "../app/(interfaces)/IPuppyInfo";

function EditPuppyForm(props: IPuppyInfo) {

  const [puppy, setPuppy] = useState({
    id: props.id,
    name: props.name,
    breed: props.breed,
    birthDate: props.birthDate,
  });

  function handleNameChange(event: any) {
    setPuppy({...puppy, name: event.target.value});
  }

  function handleBreedChange(event: any) {
    setPuppy({...puppy, breed: event.target.value});
  }

  function handleBirthDateChange(event: any) {
    setPuppy({...puppy, birthDate: event.target.value});
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(puppy),
    };
    fetch(`http://localhost:8080/api/puppies/${props.id}`, requestOptions)
      .catch((error) => {
        console.error('Error: ', error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className={"article-form"} encType={'application/json'}>
      <input
        type="text"
        value={puppy.name}
        onChange={handleNameChange}
        // className={"article-form__title-input"}
        placeholder={puppy.name}
      />
      <input
        type="text"
        value={puppy.breed}
        onChange={handleBreedChange}
        // className={"article-form__title-input"}
        placeholder={puppy.breed}
      />
      <input
        type="text"
        value={puppy.birthDate}
        onChange={handleBirthDateChange}
        // className={"article-form__title-input"}
        placeholder={puppy.birthDate}
      />
      <button type={"submit"}>
        Submit
      </button>
    </form>
  );
}

export default EditPuppyForm;