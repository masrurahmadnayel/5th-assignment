
document.getElementById('button').addEventListener('click', jsonDataFunction )


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
            <div onclick="detailsFunction()" class="col">
                  <div style="width: 350px;" class="card shadow-sm">
                    <img class="bd-placeholder-img card-img-top" src="${foodObj.meals[i].strMealThumb}" alt="" width="100%" height="225">
                    <div class="card-body">
                      <p class="card-text">${foodName}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `
    foodDisplay.appendChild(div);

    // const detailsImage = document.getElementById('details-image');
    // const detailsHeading = document.getElementById('details-heading');
    // const detailsParagraph = document.getElementById('details-paragraph');
    // detailsHeading.innerText = foodName;
  }
  }


//   function detailsFunction() {
//     const detailsSection = document.getElementById('details-section-div');
//     detailsSection.style.display = 'block';
//     const hideButton = document.getElementById('hide-button');
//     hideButton.addEventListener('click', function(){
//     detailsSection.style.display = 'none';
//     })
// }





