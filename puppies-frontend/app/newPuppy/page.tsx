'use client';

import React, {useState} from 'react';
import Header from "../../components/Header";
import {router} from "next/client";

function NewPuppyPage() {

  const [puppy, setPuppy] = useState({
    name: '',
    breed: '',
    birthDate: '',
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
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(puppy),
    };
    fetch('http://localhost:8080/api/puppies', requestOptions)
      .catch((error) => {
        console.error('Error: ', error);
      });
  }

  return (
    <div className={`flex flex-col items-center w-screen h-screen bg-stone-50`}>
      <Header/>
      <p className={`text-stone-900 text-xl font-bold`}>Enter details for new puppy below:</p>
      <form onSubmit={handleSubmit} className={`flex flex-col items-center`} encType={'application/json'}>
        <input
          type="text"
          value={puppy.name}
          onChange={handleNameChange}
          className={`w-almost-full text-2xl placeholder:text-2xl p-2 m-2 rounded-md bg-stone-100`}
          placeholder={"Name"}
        />
        <input
          type="text"
          value={puppy.breed}
          onChange={handleBreedChange}
          className={`w-almost-full text-2xl placeholder:text-2xl p-2 m-2 rounded-md rounded-md bg-stone-100`}
          placeholder={"Breed"}
        />
        <input
          type="text"
          value={puppy.birthDate}
          onChange={handleBirthDateChange}
          className={`w-almost-full text-2xl placeholder:text-2xl p-2 m-2 rounded-md rounded-md bg-stone-100`}
          placeholder={"Birth date (YYYY-MM-DD)"}
        />
        <button
          type={"submit"}
          className={`bg-sky-200 text-3xl pb-2 pt-2 pr-5 pl-5 m-5 rounded-md hover:bg-sky-100`}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default NewPuppyPage;