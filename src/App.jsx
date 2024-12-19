import { useState, useEffect } from 'react';
import './App.css';
import CatList from './components/CatList';
import NewCatForm from './components/NewCatForm';
import axios from 'axios';

const kbaseURL = 'http://localhost:5000';

const convertFromApi = (apiCat) => {
  const newCat = {
    ...apiCat,
    caretaker: apiCat.caretaker ? apiCat.caretaker : 'Unknown',
    petCount: apiCat.pet_count
  };

  delete newCat.pet_count;
  return newCat;
};

const getAllCatsApi = () => {
  return axios.get(`${kbaseURL}/cats`)
    .then( response => {
      const apiCats = response.data;
      const newCats = apiCats.map(convertFromApi);
      return newCats;
    })
    .catch(error => {
      console.log(error);
    });
};


const petCatApi = (id) => {
  return axios.patch(`${kbaseURL}/cats/${id}/pet`)
    .then( response => {
      const newCat = convertFromApi(response.data);
      return newCat;
    })
    .catch( error => {
      console.log(error);
    });
};

const unregisterCatApi = (id) => {
  return axios.delete(`${kbaseURL}/cats/${id}`)
    .catch(error => {
      console.log(error);
    });
};


function App() {
  const [catData, setCatData] = useState([]);

  const getAllCats = () => {
    getAllCatsApi()
      .then(cats => {
        setCatData(cats);
      });
  };

  useEffect(() => {
    getAllCats();
  }, []);

  const handlePetCat = (id) => {
    // console.log(`we pet ${id} cat`);
    // update the cat
    petCatApi(id)
      .then((apiCat) => {
        setCatData(catData => catData.map(cat => {
          if (cat.id === id) {
            // update pet count
            return apiCat;
          } else {
            // no change to this cat
            return cat;
          }
        }));
      });

    // const newCatData = catData.map(cat => {
    //   if (cat.id === id) {
    //     // update pet count
    //     return { ...cat, petCount: cat.petCount + 1 };
    //   } else {
    //     // no change to this cat
    //     return cat;
    //   }
    // });
    // setCatData(newCatData);
  };

  const handleUnregisterCat = (id) => {
    unregisterCatApi(id)
      .then(() => {
        setCatData(catData => catData.filter(cat => {
          return cat.id !== id;
        }));
      });
  };

  // const calculateTotalPetCount = (catData) => {
  //   let total = 0;
  //   for (const cat of catData) {
  //     total += cat.petCount;
  //   }
  //   return total;
  // };

  const calculateTotalPetCount = (catData) => {
    return catData.reduce((total, cat) => {
      return total + cat.petCount;
    }, 0);
  };

  const totalPets = calculateTotalPetCount(catData);

  const handleSubmit = (catData) => {
    axios.post(`${kbaseURL}/cats`, catData)
      .then((result) => {
        setCatData((prevCats) => [convertFromApi(result.data), ...prevCats]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main>
        <h1> The Cat Corral </h1>
        <h2>Total Number of Pets Across All Cats: {totalPets}</h2>
        <NewCatForm handleSubmit={handleSubmit}/>
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
