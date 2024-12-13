import { useState } from 'react';
import './App.css';
import CatList from './components/CatList';   // it is local import so ./components


const DATA = [
  {
    id: 1,
    name: 'Ubik',
    caretaker: 'Maria',
    color: 'grey',
    personality: 'wild child',
    petCount: 1
  },
  {
    id: 2,
    name: 'Pepper',
    caretaker: 'Mark',
    color: 'black',
    personality: 'spicy',
    petCount: 0
  },
  {
    id: 3,
    name: 'Binx',
    caretaker: 'Susan',
    color: 'tuxedo',
    personality: 'feral',
    petCount: 0
  },
  {
    id: 4,
    name: 'pisspiss',
    caretaker: 'buusan',
    color: 'hazel',
    personality: 'fluffy',
    petCount: 0
  }
];

function App() {
  // State to manage the current list of cats
  const [catData, setCatData] = useState(DATA);

  // Function to handle "petting" a cat
  const handlePetCat = (id) => {
    setCatData((catData) =>
      catData.map((cat) => {
        if (cat.id === id) {
          // Increment pet count for the matching cat
          return { ...cat, petCount: cat.petCount + 1 };
        } else {
          // No change for non-matching cats
          return cat;
        }
      })
    );
  };

  // Function to handle unregistering (removing) a cat
  const handleUnregisterCat = (id) => {
    setCatData((catData) => catData.filter((cat) => cat.id !== id)); // Remove the cat with the matching id
  };

  // Function to calculate the total number of pets across all cats
  const calculateTotalPetCount = (catData) => {
    return catData.reduce((total, cat) => total + cat.petCount, 0); // Sum petCount for all cats
  };
  const totalPets = calculateTotalPetCount(catData);

  return (
    <>
      <main>
        <h1> The Cat Corral </h1>
        <h2>Total Number of Pets Across All Cats: {totalPets}</h2>
        <CatList
          catData={catData}
          onPetCat={handlePetCat}
          onUnregisterCat={handleUnregisterCat}
        />
      </main>
    </>
  );
}

export default App;
