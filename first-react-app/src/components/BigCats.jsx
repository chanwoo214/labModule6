import React, { useState } from 'react';
import AddCatForm from './AddCatForm';


const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
];

const initialCatsData = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'url1' },
    { name: 'Cougar', latinName: 'Puma concolor', image: 'url2' },
    { name: 'Jaguar', latinName: 'Panthera onca', image: 'url3' },
    // ... other cat data ...
  ];
  
  const BigCats = () => {
    const [cats, setCats] = useState(initialCatsData);
  
    const addCat = (newCat) => {
      setCats([...cats, newCat]);
    };
  
    const sortCatsAlphabetically = () => {
      const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
      setCats(sortedCats);
    };
  
    const reverseCats = () => {
      const reversedCats = [...cats].reverse();
      setCats(reversedCats);
    };
  
    const filterPantheraFamily = () => {
      const pantheraCats = cats.filter((cat) => cat.latinName.includes('Panthera'));
      setCats(pantheraCats);
    };
  
  
  
    const handleDelete = (id) => {
        const updatedCats = cats.filter((cat) => cat.id !== id);
        setCats(updatedCats);
      };

      const resetList = () => {
        setCats(initialCatsData);
      };
      
      return (
        <div className="cat-list">
          <h2>Big Cats List:</h2>
          <ul>
            {cats.map((cat) => (
              <li key={cat.id} className="cat-item">
                <img src={cat.image} alt={cat.name} />
                <div className="cat-details">
                  <h3>{cat.name}</h3>
                  <p>{cat.latinName}</p>
                  <button onClick={() => handleDelete(cat.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default BigCats;