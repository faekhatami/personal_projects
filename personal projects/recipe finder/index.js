const searchRecipes = () => {
  const ingredients = document.getElementById('ingredients').value;

  // Clear previous results
  document.getElementById('results').innerHTML = '';

  // Make API call to fetch recipes based on ingredients
  fetch(https://api.example.com/recipes?ingredients=${ingredients})
    .then(response => response.json())
    .then(data => {
      // Display the list of recipes on the results div
      data.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = 
          <h3>${recipe.name}</h3>
          <p>${recipe.instructions}</p>
        ;
        document.getElementById('results').appendChild(recipeElement);
      });
    })
    .catch(error => console.log(error));
};