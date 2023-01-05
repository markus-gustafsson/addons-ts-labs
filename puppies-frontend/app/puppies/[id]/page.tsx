import React from 'react';
import Header from "../../../components/Header";
import EditPuppyForm from "../../../components/EditPuppyForm";

async function getPuppy(id: number) {
  const response = await fetch(`http://localhost:8080/api/puppies/${id}`);
  return response.json();
}

function formatDateTime(dateTime: string) {
  if (dateTime)
    return dateTime.replaceAll('T00:00:00', '');
  return 'unknown';
}

// TODO: this should mayhaps be fixed :)
// @ts-ignore
async function PuppyPage({params}) {

  const puppy = await getPuppy(params.id);

  return (
    <div>
      <Header/>
      <p>Here you can find all the information about the puppy {puppy.name}.</p>
      <ul>
        <li>ID: {puppy.id}</li>
        <li>NAME: {puppy.name}</li>
        <li>BREED: {puppy.breed}</li>
        <li>BIRTH DATE: {formatDateTime(puppy.birthDate)}</li>
      </ul>
      <EditPuppyForm id={puppy.id} name={puppy.name} breed={puppy.breed} birthDate={puppy.birthDate}/>
    </div>
  );
}

export default PuppyPage;