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
    <div>
      <Header/>
      <form onSubmit={handleSubmit} className={"article-form"} encType={'application/json'}>
        <input
          type="text"
          value={puppy.name}
          onChange={handleNameChange}
          // className={"article-form__title-input"}
          placeholder={"name..."}
        />
        <input
          type="text"
          value={puppy.breed}
          onChange={handleBreedChange}
          // className={"article-form__title-input"}
          placeholder={"breed..."}
        />
        <input
          type="text"
          value={puppy.birthDate}
          onChange={handleBirthDateChange}
          // className={"article-form__title-input"}
          placeholder={"birth date e.g. 2022-01-01..."}
        />
        <button type={"submit"}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPuppyPage;