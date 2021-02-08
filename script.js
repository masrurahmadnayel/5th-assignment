
document.getElementById('button').addEventListener('click', jsonDataFunction)


function jsonDataFunction() {
  const foodInput = document.getElementById('food-input').value;
  if (foodInput.length > 1) { //----this line of code is for searching meal by it's name----
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInput}`)
      .then(res => res.json())
      .then(data => getFoodName(data))
  }
  else if (foodInput.length === 1) { //----this line of code is for searching meal by it's first name----
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodInput}`)
      .then(res => res.json())
      .then(data => getFoodName(data))
  }

}

const getFoodName = foodObj => {
  for (let i = 0; i < foodObj.meals.length; i++) {
    const foodName = foodObj.meals[i].strMeal;
    const foodDisplay = document.getElementById('food-display');
    //---------------
    const div = document.createElement('div');
    div.className = 'food-container';
    div.innerHTML = `
            <div class="foods" class="col">
                  <div style="width: 350px;" class="card shadow-sm">
                    <img id="food-image" class="bd-placeholder-img card-img-top" src="${foodObj.meals[i].strMealThumb}" alt="" width="100%" height="225">
                    <div class="card-body">
                      <p id="food-name" class="card-text">${foodName}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `
    foodDisplay.appendChild(div);
  }
  const foods = document.getElementsByClassName('foods');
  for (let i = 0; i < foods.length; i++) {
    const food = foods[i];

    food.addEventListener('click',() =>{
      document.getElementById('details-section').style.display = 'block';
      document.getElementById('details-section').style.zIndex = 1;
      const foodInput = document.getElementById('food-input').value;
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInput}`)
        .then(res => res.json())
        .then(foodObj => {
          const detailsSection = document.getElementById('details-section');
          let detailsSectionDiv = document.createElement('div')
          detailsSectionDiv.innerHTML = `<div id="details-section-div">
              <img style="width: 500px; height: 300px;" src="${foodObj.meals[i].strMealThumb}">
              <h5>${foodObj.meals[i].strMeal}</h5>
              <p>${foodObj.meals[i].strInstructions}</p>
              <a id="hide-button">ok</a>
            </div>
            `
          detailsSection.appendChild(detailsSectionDiv);
          var clickButton = document.getElementById('hide-button')
          clickButton.addEventListener('click', () => {
            document.getElementById('details-section').style.display = 'none';
          })
        })
    })
  }
}



