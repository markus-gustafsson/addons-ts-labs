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
    <>
      <p className={`mt-5 font-bold`}>Something wrong? Edit the puppy here:</p>
      <form onSubmit={handleSubmit} className={`flex flex-col items-center`} encType={'application/json'}>
        <input
          type="text"
          value={puppy.name}
          onChange={handleNameChange}
          className={`w-almost-full text-2xl placeholder:text-2xl p-2 m-2 rounded-md bg-stone-100`}
          placeholder={puppy.name}
        />
        <input
          type="text"
          value={puppy.breed}
          onChange={handleBreedChange}
          className={`w-almost-full text-2xl placeholder:text-2xl p-2 m-2 rounded-md rounded-md bg-stone-100`}
          placeholder={puppy.breed}
        />
        <input
          type="text"
          value={puppy.birthDate}
          onChange={handleBirthDateChange}
          className={`w-almost-full text-2xl placeholder:text-2xl p-2 m-2 rounded-md rounded-md bg-stone-100`}
          placeholder={puppy.birthDate}
        />
        <button
          type={"submit"}
          className={`bg-sky-200 text-3xl pb-2 pt-2 pr-5 pl-5 m-5 rounded-md hover:bg-sky-100`}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default EditPuppyForm;