import React from 'react';
import Header from "../../../components/Header";
import EditPuppyForm from "../../../components/EditPuppyForm";
import DeletePuppyButton from "../../../components/DeletePuppyButton";

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
    <div className={`flex flex-col items-center w-screen h-screen bg-stone-50`}>
      <Header/>
      <p className={`font-bold ml-5 mr-5 text-center`}>Here you can find all the information about {puppy.name}.</p>
      <ul className={`p-4 mt-2 rounded-lg bg-stone-200 w-almost-full text-center`}>
        <li>ID: {puppy.id}</li>
        <li>NAME: {puppy.name}</li>
        <li>BREED: {puppy.breed}</li>
        <li>BIRTH DATE: {formatDateTime(puppy.birthDate)}</li>
      </ul>
      <EditPuppyForm id={puppy.id} name={puppy.name} breed={puppy.breed} birthDate={formatDateTime(puppy.birthDate)}/>
      <DeletePuppyButton id={puppy.id}/>
    </div>
  );
}

export default PuppyPage;