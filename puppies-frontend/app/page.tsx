import React from 'react';
import Header from "../components/Header";
import PuppyListItem from "../components/PuppyListItem";
import {IPuppyInfo} from "./(interfaces)/IPuppyInfo";
import NewPuppyButton from "../components/NewPuppyButton";

const getPuppies = async () => {
  const response = await fetch('http://localhost:8080/api/puppies');
  return response.json();
}

const Home = async () => {
  const puppies: IPuppyInfo[] = await getPuppies();
  return (
    <div className={`flex flex-col h-screen items-center bg-stone-50`}>
      <Header/>
      {
        puppies.length > 0 ?
          <>
            <NewPuppyButton/>
            <ul>
              {puppies.map((puppy: IPuppyInfo) => (
                <li key={puppy.id}>
                  <PuppyListItem id={puppy.id} breed={puppy.breed} name={puppy.name} birthDate={puppy.birthDate}/>
                </li>
              ))}
            </ul>
          </>
          :
          <>
            <h2>Seems like we don't have any puppies, try adding one:</h2>
            {/*<NewPuppyButton/>*/}
          </>
      }
    </div>
  );
};


export default Home;