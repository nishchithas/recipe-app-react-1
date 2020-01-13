import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "801cb971";
  const APP_KEY = "57456b2221bd3c8ddbde9794103e1110";
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  useEffect ( () => {
    getrecipes();
  },[query]);

  const getrecipes = async () => {
      const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const recipes = await response.json();
      setRecipes(recipes.hits);
  } 

  const updateSearch = event =>{
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    if(search){
      setQuery(search);
      setSearch("");
    }
  }
  return (
    <div className = "App">
      <form onSubmit={getSearch} className="search-form">
        <input placeholder="Default:chicken" className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {
          recipes.map(item => (<Recipe
            key={item.recipe.label}
            title={item.recipe.label} 
            calories = {item.recipe.calories}
            image={item.recipe.image}
            ingredients = {item.recipe.ingredients}
          />))
        }
      </div>
    </div>
  );
}

export default App;
